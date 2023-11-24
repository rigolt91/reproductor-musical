<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FileLibraryController extends Controller
{
    public function index() {
        return inertia('FileLibrary');
    }
}
