<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
Use App\Models\Proyecto;

class ProyectoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Proyecto::factory(200)->create();
    }
}