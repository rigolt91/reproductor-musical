<?php

namespace App\Http\Controllers;

use App\Models\AudioListFile;
use App\Models\ListFile;
use App\Models\VisualListFile;
use Illuminate\Http\Request;

class PlaylistsController extends Controller
{
    protected $listFile;
    protected $visualListFile;
    protected $audioListFile;

    public function __construct(ListFile $listFile, VisualListFile $visualListFile, AudioListFile $audioListFile)
    {
        $this->listFile = $listFile;
        $this->visualListFile = $visualListFile;
        $this->audioListFile = $audioListFile;
    }

    public function index(Request $request)
    {
        return inertia('Playlists', ['listFiles' => $this->listFile->select('id', 'title', 'active')->search($request->search)->get()]);
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
            'visualListFile' => $this->visualListFile->where('list_file_id', $id)->with('visualFile')->get(),
            'audioListFile' => $this->audioListFile->where('list_file_id', $id)->with('audioFile')->get()
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
}
