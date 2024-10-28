<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Category>
 */
class CategoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [

            'name' => $name = $this->faker->unique()->randomElement([
                'Zgaphy Warrior',
                'Zgaphy Machine',
                'Zgaphy Concert',
                'Zgaphy Collaboration',
                'Zgaphy Animals',
                'Zgaphy Chill',
                'Zgaphy Seasonal',
                'Zgaphy Exhibition',
            ]),
            'slug' => str()->lower(str()->slug($name) . str()->random(4)),
        ];
    }
}
