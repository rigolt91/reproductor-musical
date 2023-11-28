<?php

namespace App\Http\Controllers;

use App\Models\ListFile;
use App\Models\VisualFile;
use Illuminate\Http\Request;

class PlaylistsController extends Controller
{
    protected $listFile;
    protected $visualFile;

    public function __construct(
        ListFile $listFile,
        VisualFile $visualFile
    ) {
        $this->listFile = $listFile;
        $this->visualFile = $visualFile;
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
        return inertia('Partials/Playlist/Playlist', ['listFile' => $this->listFile->findOrFail($id)]);
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

        $path = $request->file('file')->store('visual_files');

        $this->visualFile->create(['title' => $request->title, 'file' => $path]);

        return to_route('playlists.edit', $request->listFileId);
    }
}
