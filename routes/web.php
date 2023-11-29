<?php

use App\Http\Controllers\FileLibraryController;
use App\Http\Controllers\NewPlaylistController;
use App\Http\Controllers\PlaylistsController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\VisualFileController;
use App\Models\VisualFile;
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

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::resource('/playlists', PlaylistsController::class)
    ->only('index', 'store', 'create', 'edit', 'show', 'destroy')
    ->middleware(['auth', 'verified']);

Route::post('/visual-file', [PlaylistsController::class, 'storeVisualFile'])->name('visual-file.store')->middleware(['auth', 'verified']);
Route::delete('/visual-file/{id}', [PlaylistsController::class, 'destroyVisualFile'])->name('visual-file.destroy')->middleware(['auth', 'verified']);

Route::get('/file-library', [FileLibraryController::class, 'index'])->middleware(['auth', 'verified'])->name('file-library');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
