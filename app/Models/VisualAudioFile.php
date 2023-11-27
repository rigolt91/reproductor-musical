<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VisualAudioFile extends Model
{
    use HasFactory;

    protected $fillable = ['list_file_id', 'visual_file_id', 'audio_file_id'];
}
