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
        $playlists = $this->listFile
            ->with(['visualListFiles' => function($query) {
                $query->with('visualFile');
            }])
            ->with(['audioListFiles' => function($query) {
                $query->with('audioFile');
            }])->active()->get();

        return inertia('Welcome', ['playlists' => $playlists]);
    }
}
