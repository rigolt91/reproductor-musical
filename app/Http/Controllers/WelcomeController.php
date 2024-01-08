<?php

namespace App\Http\Controllers;

use App\Models\AudioFile;
use App\Models\AudioFileSpotify;
use App\Models\ListFile;
use App\Models\VisualFile;

class WelcomeController extends Controller
{
    protected $listFile;
    protected $visualFile;
    protected $audioFile;
    protected $audioFileSpotify;

    public function __construct(
        ListFile $listFile,
        VisualFile $visualFile,
        AudioFile $audioFile,
        AudioFileSpotify $audioFileSpotify
    ) {
        $this->listFile = $listFile;
        $this->visualFile = $visualFile;
        $this->audioFile = $audioFile;
        $this->audioFileSpotify = $audioFileSpotify;
    }

    public function index()
    {
        $playlists = $this->listFile->active()->first();

        $visualFile = [];
        $audioFile = [];
        $audioFileSpotify = [];

        if($playlists) {
            $visualFile = $this->visualFile->whereListFile($playlists->id)->select('id', 'file', 'extension')->get();
            $audioFile = $this->audioFile->whereListFile($playlists->id)->select('id', 'file')->inRandomOrder()->get();
            $audioFileSpotify = $this->audioFileSpotify->whereListFile($playlists->id)->select('id', 'type', 'file')->first();
        }

        return inertia('Welcome', [
            'visualFiles' => $visualFile,
            'audioFiles' => $audioFile,
            'audioFilesSpotify' => $audioFileSpotify
        ]);
    }
}
