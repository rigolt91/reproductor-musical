<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ListFile extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'active'];

    public function audioFiles()
    {
        return $this->hasManyThrough(AudioFile::class, VisualAudioFile::class);
    }

    public function visualFiles()
    {
        return $this->hasManyThrough(VisualFile::class, VisualAudioFile::class);
    }
}
