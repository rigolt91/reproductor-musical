<?php

namespace App\Http\Controllers;

use App\Models\ListFile;
use App\Models\VisualFile;
use App\Models\VisualListFile;
use Illuminate\Http\Request;
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
            'file' => 'required|mimes:png,jpg,mpg,avi,mp4|max:256000',
        ]);

        $file = $request->file('file');
        $name = $file->hashName();
        $extension = $file->extension();

        $this->isImage($extension) ? $file->storeAs('public/images', $name) : $file->storeAs('public/videos/', $name);

        $listFile = $this->listFile->find($request->listFileId);

        $listFile->visualFiles()->create([
            'title' => $request->title,
            'file' => $name,
            'extension' => $extension
        ]);

        return to_route('playlists.edit', $request->listFileId);
    }

    public function destroy(VisualFile $visualFile)
    {
        $listFileId = $visualFile->list_file_id;

        $this->destroyFile($visualFile);

        $visualFile->delete();

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
}
