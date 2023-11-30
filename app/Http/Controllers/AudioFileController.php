<?php

namespace App\Http\Controllers;

use App\Models\AudioFile;
use App\Models\ListFile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class AudioFileController extends Controller
{
    protected $listFile;

    public function __construct(ListFile $listFile)
    {
        $this->listFile = $listFile;
    }

    public function store(Request $request)
    {
        $request->validate([
            'file' => 'required|mimes:mp3,wav|max:256000',
        ]);

        $file = $request->file('file');
        $name = $file->getClientOriginalName();

        $file->storeAs('public/audios', $name);

        $listFile = $this->listFile->find($request->listFileId);

        $listFile->audioFiles()->create(['file' => $name]);

        return to_route('playlists.edit', $request->listFileId);
    }

    public function destroy(AudioFile $audioFile)
    {
        $listFileId = $audioFile->list_file_id;

        Storage::delete('public/audios/'.$audioFile->file);

        $audioFile->delete();

        return to_route('playlists.edit', $listFileId);
    }
}
