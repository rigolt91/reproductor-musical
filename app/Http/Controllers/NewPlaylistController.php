<?php

namespace App\Http\Controllers;

use App\Models\ListFile;
use Illuminate\Http\Request;

class NewPlaylistController extends Controller
{
    protected $listFile;

    public function __construct(ListFile $listFile)
    {
        $this->listFile = $listFile;
    }

    public function index()
    {
        return inertia('NewPlaylist', ['listFile' => $this->listFile->latest('id')->first()->only('id', 'title')]);
    }

    public function store(Request $request)
    {
        $listFile = $this->listFile->create($request->validate(['title' => 'required']));

        return inertia('NewPlaylist', ['listFile' => $listFile->only('id', 'title')]);
    }
}
