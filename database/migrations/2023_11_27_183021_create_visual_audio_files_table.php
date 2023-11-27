<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('visual_audio_files', function (Blueprint $table) {
            $table->id();
            $table->foreignId('list_file_id')->constrained();
            $table->foreignId('visual_file_id')->constrained();
            $table->foreignId('audio_file_id')->constrained();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('visual_audio_files');
    }
};
