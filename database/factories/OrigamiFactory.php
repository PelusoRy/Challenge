<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Origami>
 */
class OrigamiFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nombre' => fake()->name(),
            'descripcion' => fake()->text(),
            'nivel_de_dicultad' => fake()->randomElement(['Facil','Medio','Dificil']),
            'imagen' => null
        ];
    }
}
