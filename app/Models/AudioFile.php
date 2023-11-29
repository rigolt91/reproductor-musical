<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AudioFile extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'file'];

    public function audioListFile()
    {
        return $this->hasOne(AudioListFile::class);
    }
}
