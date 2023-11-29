<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VisualListFile extends Model
{
    use HasFactory;

    protected $fillable = ['list_file_id', 'visual_file_id'];

    public function listFile()
    {
        return $this->belongsTo(ListFile::class);
    }

    public function visualFile()
    {
        return $this->belongsTo(VisualFile::class);
    }
}
