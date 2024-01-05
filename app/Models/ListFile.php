<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ListFile extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'active', 'list_file_id'];

    public function audioFiles()
    {
        return $this->hasOne(AudioFile::class);
    }

    public function audioFilesSpotify()
    {
        return $this->hasOne(AudioFileSpotify::class);
    }

    public function visualFiles()
    {
        return $this->hasOne(VisualFile::class);
    }

    public function scopeSearch(Builder $query, $title)
    {
        $query->where('title', 'like', "%$title%");
    }

    public function scopeActive(Builder $query)
    {
        $query->where('active', true);
    }
}
