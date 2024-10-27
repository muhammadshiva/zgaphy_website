<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Artwork extends Model
{
    protected $fillable = [
        'artwork_code',
        'title',
        'slug',
        'cover',
        'description',
        'price',
        'series',
        'frame_width',
        'frame_height',
        'category_id',
    ];
}
