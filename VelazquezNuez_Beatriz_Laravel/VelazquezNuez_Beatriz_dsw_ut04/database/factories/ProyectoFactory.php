<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
Use App\Models\Proyecto;

class ProyectoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'nombre' => $this->faker->name,
            'descripcion' => $this->faker->paragraph,
            'categoria' => $this->faker->randomElement(['Desarrollo de Aplicaciones','Equipamiento','Mejora', 'Ampliación', 'Reposición']),
            'precio' => $this->faker->randomFloat(3,2000,4500),
            'estado' => $this->faker->randomElement(['Terminado','En Pausa','En desarrollo', 'Cancelado']),
        ];
    }
}