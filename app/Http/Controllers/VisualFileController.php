<?php

namespace App\Http\Controllers;

use App\Models\ListFile;
use App\Models\VisualFile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class VisualFileController extends Controller
{
    protected $listFile;

    public function __construct(ListFile $listFile)
    {
        $this->listFile = $listFile;
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'files' => 'required|array',
        ]);

        try {
            $files = $request->file('files');

            foreach ($files as $file) {
                $name = $file->hashName();
                $extension = $file->extension();

                if(! $this->isImage($extension) && ! $this->isVideo($extension)) {
                    return redirect()->back()->withErrors(['files' => 'El campo file debe ser de tipo (png, jpeg, jpg, mpg, avi, mp4)']);
                }

                if($this->isImage($extension)) {
                    $file->storeAs('public/images/', $name);
                }

                if($this->isVideo($extension)) {
                    $file->storeAs('public/videos/', $name);
                }

                $listFile = $this->listFile->find($request->listFileId);

                $listFile->visualFiles()->create([
                    'title' => $request->title,
                    'file' => $name,
                    'extension' => $extension
                ]);
            }
        } catch (\Throwable $th) {
            Log::info("Error VisualFileController::store(), cannot upload file. (".$th->getMessage().")");
        }

        return to_route('playlists.edit', $request->listFileId);
    }

    public function destroy(VisualFile $visualFile)
    {
        try {
            $listFileId = $visualFile->list_file_id;

            $this->destroyFile($visualFile);

            $visualFile->delete();
        } catch (\Throwable $th) {
            Log::info("Error VisualFileController::destroy(), cannot delete file. ".$th->getMessage());
        }

        return to_route('playlists.edit', $listFileId);
    }

    public function destroyFile($visualFile)
    {
        $name = $visualFile->file;
        $extension = $visualFile->extension;

        $this->isImage($extension) ? Storage::delete('public/images/'.$name) : Storage::delete('public/videos/'.$name);
    }

    public function isImage($extension)
    {
        $extensions = ['png', 'jpg', 'jpeg'];

        return in_array($extension, $extensions) ? true : false;
    }

    public function isVideo($extension)
    {
        $extensions = ['mpg', 'avi', 'mp4'];

        return in_array($extension, $extensions) ? true : false;
    }
}
