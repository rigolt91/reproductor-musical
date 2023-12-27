<?php

namespace App\Http\Controllers;

use App\Models\AudioFile;
use App\Models\ListFile;
use App\Models\VisualFile;

class WelcomeController extends Controller
{
    protected $listFile;
    protected $visualFile;
    protected $audioFile;

    public function __construct(
        ListFile $listFile,
        VisualFile $visualFile,
        AudioFile $audioFile
    ) {
        $this->listFile = $listFile;
        $this->visualFile = $visualFile;
        $this->audioFile = $audioFile;
    }

    public function index()
    {
        $playlists = $this->listFile->active()->first();

        $visualFile = [];
        $audioFile = [];

        if($playlists) {
            $visualFile = $this->visualFile->whereListFile($playlists->id)->select('id', 'file', 'extension')->get();
            $audioFile = $this->audioFile->whereListFile($playlists->id)->select('id', 'file')->inRandomOrder()->get();
        }

        return inertia('Welcome', [
            'visualFiles' => $visualFile,
            'audioFiles' => $audioFile
        ]);
    }
}
