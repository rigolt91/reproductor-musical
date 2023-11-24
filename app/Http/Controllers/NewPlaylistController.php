<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class NewPlaylistController extends Controller
{
    public function index() {
        return inertia('NewPlaylist');
    }
}
