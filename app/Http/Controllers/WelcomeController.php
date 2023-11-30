<?php

namespace App\Http\Controllers;

use App\Models\ListFile;
use Illuminate\Http\Request;

class WelcomeController extends Controller
{
    protected $listFile;

    public function __construct(
        ListFile $listFile

    ) {
        $this->listFile = $listFile;
    }

    public function index()
    {
        $playlists = $this->listFile->active()->first();

        return inertia('Welcome', [
            'visualFiles' => $playlists->visualFiles()->select('id', 'file', 'extension')->get(),
            'audioFiles' => $playlists->audioFiles()->select('id', 'file')->get()
        ]);
    }
}
