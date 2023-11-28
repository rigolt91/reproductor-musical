<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use Carbon\Carbon;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
         \App\Models\User::create([
            'name' => 'Admin',
            'email' => 'admin@bclab.com.ar',
            'email_verified_at' => Carbon::now(),
            'password' => bcrypt('admin')
        ]);
    }
}
