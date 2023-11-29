<?php

namespace App\Http\Controllers;

use App\Models\AudioListFile;
use App\Models\ListFile;
use App\Models\VisualFile;
use App\Models\VisualListFile;
use Illuminate\Http\Request;

class PlaylistsController extends Controller
{
    protected $listFile;
    protected $visualFile;
    protected $visualListFile;
    protected $audioListFile;

    public function __construct(
        ListFile $listFile,
        VisualFile $visualFile,
        VisualListFile $visualListFile,
        AudioListFile $audioListFile
    ) {
        $this->listFile = $listFile;
        $this->visualFile = $visualFile;
        $this->visualListFile = $visualListFile;
        $this->audioListFile = $audioListFile;
    }

    public function index()
    {
        return inertia('Playlists', ['listFiles' => $this->listFile->select('id', 'title', 'active')->get()]);
    }

    public function store(Request $request)
    {
        $listFile = $this->listFile->create($request->validate(['title' => 'required']));

        return to_route('playlists.edit', $listFile->id);
    }

    public function edit($id)
    {
        $listFile = $this->listFile->findOrFail($id);

        return inertia('Partials/Playlist/Playlist', [
            'listFile' => $listFile,
            'visualListFile' => $this->visualListFile->where('list_file_id', $id)->with('visualFile')->get()
        ]);
    }

    public function destroy($id)
    {
        $this->listFile->find($id)->delete();

        return to_route('playlists.index');
    }

    public function show($id)
    {
        $listFile = $this->listFile->findOrFail($id);

        if($listFile->active) {
            $listFile->update(['active' => false]);
        } else {
            $this->listFile->where('active', 1)->update(['active' => false]);

            $listFile->update(['active' => true]);
        }

        return to_route('playlists.index');
    }

    public function storeVisualFile(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'file' => 'required|mimes:png,jpg,mpg,avi,mp4|max:256000',
        ]);

        $path = $request->file('file')->store('public/visual_files');

        $visualFile = $this->visualFile->create(['title' => $request->title, 'file' => $path]);

        $listFile = $this->listFile->find($request->listFileId);

        $listFile->visualListFiles()->create(['visual_file_id' => $visualFile->id]);

        return to_route('playlists.edit', $request->listFileId);
    }

    public function destroyVisualFile($id)
    {
        $visualListFile = $this->visualListFile->find($id);

        $listFileId = $visualListFile->list_file_id;

        $visualListFile->delete();

        return to_route('playlists.edit', $listFileId);
    }
}
