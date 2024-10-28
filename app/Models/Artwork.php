<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

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

    public function collectors(): HasMany
    {
        return $this->hasMany(Collector::class);
    }

    public function transactions(): HasMany
    {
        return $this->hasMany(Transaction::class);
    }

    public function category(): HasOne
    {
        return $this->hasOne(Category::class);
    }

    public function stock(): HasOne
    {
        return $this->hasOne(Stock::class);
    }
}
