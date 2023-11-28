<?php

namespace App\Http\Controllers;

use App\Models\ListFile;
use Illuminate\Http\Request;

class PlaylistsController extends Controller
{
    protected $listFile;

    public function __construct(ListFile $listFile)
    {
        $this->listFile = $listFile;
    }

    public function index() {
        return inertia('Playlists', ['listFiles' => $this->listFile->select('id', 'title')->get()]);
    }
}
