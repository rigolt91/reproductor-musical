<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VisualFile extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'file', 'extension'];

    public function listFile()
    {
        return $this->belongsTo(ListFile::class);
    }

    public function scopeWhereListFile(Builder $query, $id)
    {
        return $query->where('list_file_id', $id);
    }
}
