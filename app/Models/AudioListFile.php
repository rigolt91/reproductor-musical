<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AudioListFile extends Model
{
    use HasFactory;

    protected $fillable = ['list_file_id', 'audio_file_id'];

    public function listFile()
    {
        return $this->belongsTo(ListFile::class);
    }

    public function audioFile()
    {
        return $this->belongsTo(AudioFile::class);
    }
}
