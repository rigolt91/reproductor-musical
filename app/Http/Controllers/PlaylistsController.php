<?php

namespace App\Http\Controllers;

use App\Models\ListFile;
use Illuminate\Http\Request;

class PlaylistsController extends Controller
{
    protected $listFile;

    public function __construct(ListFile $listFile)
    {
        $this->listFile = $listFile;
    }

    public function index(Request $request)
    {
        return inertia('Playlists', [
            'listFiles' => $this->listFile->with('visualFiles')
                ->select('id', 'title', 'active')
                ->search($request->search)
                ->get()
        ]);
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
            'visualFiles' => $listFile->visualFiles()->get(),
            'audioFiles' => $listFile->audioFiles()->get(),
            'audioFilesSpotify' => $listFile->audioFilesSpotify()->get()
        ]);
    }

    public function destroy(VisualFileController $visualFileController, AudioFileController $audioFileController, $id)
    {
        $listFile = $this->listFile->find($id);

        foreach($listFile->visualFiles()->get() as $visualFile)
        {
            $visualFileController->destroy($visualFile);
        }

        foreach($listFile->audioFiles()->get() as $audioFile)
        {
            $audioFileController->destroy($audioFile);
        }

        $listFile->delete();

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
