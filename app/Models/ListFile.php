<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ListFile extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'active'];

    public function audioListFiles()
    {
        return $this->hasOne(AudioListFile::class);
    }

    public function visualListFiles()
    {
        return $this->hasOne(VisualListFile::class);
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
