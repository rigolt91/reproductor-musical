<?php

namespace App\Http\Controllers;

use App\Models\AudioFile;
use App\Models\ListFile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
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
        $request->validate(['files' => 'required|array']);

        try {
            $files = $request->file('files');

            foreach($files as $file) {
                $name = $file->getClientOriginalName();

                if($this->isAudio($file->extension())) {
                    $file->storeAs('public/audios', $name);

                    $listFile = $this->listFile->find($request->listFileId);

                    $listFile->audioFiles()->create(['file' => $name]);
                } else {
                    return redirect()->back()->withErrors(['files' => 'El campo file debe ser de tipo (mp3, wav)']);
                }
            }
        } catch (\Throwable $th) {
            Log::info("Error AudioFileController::store(), cannot upload file. ".$th->getMessage());
        }

        return to_route('playlists.edit', $request->listFileId);
    }

    public function destroy(AudioFile $audioFile)
    {
        try {
            $listFileId = $audioFile->list_file_id;

            Storage::delete('public/audios/'.$audioFile->file);

            $audioFile->delete();
        } catch (\Throwable $th) {
            Log::info("Error AudioFileController::destroy(), cannot delete file. ".$th->getMessage());
        }

        return to_route('playlists.edit', $listFileId);
    }

    public function isAudio($extension)
    {
        $extensions = ['mp3', 'wav'];

        return in_array($extension, $extensions) ? true : false;
    }
}
