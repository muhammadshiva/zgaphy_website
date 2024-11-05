<?php

namespace App\Models;

use App\Observers\ArtworkObserver;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Contracts\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Attributes\ObservedBy;

#[ObservedBy(ArtworkObserver::class)]

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
        'qr_code_url',
        'qr_code_image',
    ];

    public function collector(): HasOne
    {
        return $this->hasOne(Collector::class);
    }

    public function transactions(): HasMany
    {
        return $this->hasMany(Transaction::class);
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function stock(): HasOne
    {
        return $this->hasOne(Stock::class);
    }

    public function scopeFilter(Builder $query, array $filters): void
    {
        $query->when($filters['search'] ?? null, function ($query, $search) {
            $query->where(function ($query) use ($search) {
                $query->whereAny([
                    'title',
                    'slug',
                    'description',
                    'price',
                    'series',
                ], 'REGEXP', $search);
            });
        });
    }

    public function scopeSorting(Builder $query, array $sorts): void
    {
        $query->when($sorts['field'] ?? null && $sorts['direction'] ?? null, function ($query) use ($sorts) {
            $query->orderBy($sorts['field'], $sorts['direction']);
        });
    }
}
