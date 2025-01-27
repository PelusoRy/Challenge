<?php

namespace Database\Seeders;

use App\Models\Origami;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        //Defalut user por database
        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
            'password' => '1234'
        ]);

        //Default origami figures
        Origami :: factory()->create([
            'nombre' => 'Stream',
            'descripcion' => 'A kind of stream water and stream internet broadcast.',
            'imagen' => 'https://s.prworigami.com/wp-content/uploads/2023/05/b082.jpeg?w=1024'
        ]);

        Origami :: factory()->create([
            'nombre' => 'Belt Star',
            'descripcion' => 'Small Stellated Dodecahedron designed by Saku B',
            'imagen' => 'https://s.prworigami.com/wp-content/uploads/2023/06/b618.jpeg'
        ]);
    }
}
