<?php

use App\Http\Controllers\AudioFileController;
use App\Http\Controllers\FileLibraryController;
use App\Http\Controllers\PlaylistsController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\VisualFileController;
use App\Http\Controllers\WelcomeController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [WelcomeController::class, 'index'])->name('home');

Route::get('/dashboard', [PlaylistsController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');

Route::resource('/playlists', PlaylistsController::class)
    ->only('index', 'store', 'create', 'edit', 'show', 'destroy')
    ->middleware(['auth', 'verified']);

Route::resource('/visual-file', VisualFileController::class)
    ->only('store', 'destroy')
    ->middleware(['auth', 'verified']);

Route::resource('/audio-file', AudioFileController::class)
    ->only('store', 'destroy')
    ->middleware(['auth', 'verified']);

Route::get('/file-library', [FileLibraryController::class, 'index'])->middleware(['auth', 'verified'])->name('file-library');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
