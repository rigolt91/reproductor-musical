<?php

namespace App\Http\Controllers;

use App\Models\ListFile;
use App\Models\VisualFile;
use App\Models\VisualListFile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class VisualFileController extends Controller
{
    protected $visualFile;
    protected $listFile;
    protected $visualListFile;

    public function __construct(
        VisualFile $visualFile,
        ListFile $listFile,
        VisualListFile $visualListFile
    )
    {
        $this->visualFile = $visualFile;
        $this->listFile = $listFile;
        $this->visualListFile = $visualListFile;
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

        $visualFile = $this->visualFile->create([
            'title' => $request->title,
            'file' => $name,
            'extension' => $extension
        ]);

        $listFile = $this->listFile->find($request->listFileId);

        $listFile->visualListFiles()->create(['visual_file_id' => $visualFile->id]);

        return to_route('playlists.edit', $request->listFileId);
    }

    public function destroy($id)
    {
        $visualListFile = $this->visualListFile->find($id);

        $listFileId = $visualListFile->list_file_id;

        $visualListFile->delete();

        $visualFile = $visualListFile->visualFile();

        $this->destroyFile($visualFile->first());

        $visualFile->delete();

        return to_route('playlists.edit', $listFileId);
    }

    public function destroyFile($visualFile)
    {
        $name = $visualFile->file;
        $extension = $visualFile->extension;

        $this->isImage($extension) ? Storage::delete('public/images/'.$name) : Storage::delete('public/images/'.$name);
    }

    public function isImage($file)
    {
        $extensions = ['png', 'jpg', 'jpeg'];

        return in_array($file, $extensions) ? true : false;
    }
}
