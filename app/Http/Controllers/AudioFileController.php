<?php

namespace App\Http\Controllers;

use App\Models\AudioFile;
use App\Models\AudioListFile;
use App\Models\ListFile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class AudioFileController extends Controller
{
    protected $audioFile;
    protected $listFile;
    protected $audioListFile;

    public function __construct(
        AudioFile $audioFile,
        ListFile $listFile,
        AudioListFile $audioListFile
    )
    {
        $this->audioFile = $audioFile;
        $this->listFile = $listFile;
        $this->audioListFile = $audioListFile;
    }

    public function store(Request $request)
    {
        $request->validate([
            'file' => 'required|mimes:mp3,wav|max:256000',
        ]);

        $file = $request->file('file');
        $name = $file->getClientOriginalName();

        $file->storeAs('public/audios', $name);

        $audioFile = $this->audioFile->create(['file' => $name]);

        $listFile = $this->listFile->find($request->listFileId);

        $listFile->audioListFiles()->create(['audio_file_id' => $audioFile->id]);

        return to_route('playlists.edit', $request->listFileId);
    }

    public function destroy($id)
    {
        $audioListFile = $this->audioListFile->find($id);

        $listFileId = $audioListFile->list_file_id;

        $audioListFile->delete();

        $audioFile = $audioListFile->audioFile();

        $this->destroyFile($audioFile->first());

        $audioFile->delete();

        return to_route('playlists.edit', $listFileId);
    }

    public function destroyFile($audioFile)
    {
        $name = $audioFile->file;

        Storage::delete('public/audios/'.$name);
    }
}
