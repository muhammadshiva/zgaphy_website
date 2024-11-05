<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Collector extends Model
{
    protected $fillable = [
        'collector_code',
        'user_id',
        'artwork_id',
    ];

    public function transactions(): HasMany
    {
        return $this->hasMany(Transaction::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function artwork(): BelongsTo
    {
        return $this->belongsTo(Artwork::class);
    }

    public function scopeFilter(Builder $query, array $filters): void
    {
        $query->when($filters['search'] ?? null, function ($query, $search) {
            $query->where(function ($query) use ($search) {
                // Filter by collector's code
                $query->where('collector_code', 'REGEXP', $search)
                    // Filter by slug in the Collector model
                    ->orWhere('slug', 'REGEXP', $search)

                    // Filter by user's name
                    ->orWhereHas('user', function ($query) use ($search) {
                        $query->where('name', 'REGEXP', $search);
                    })

                    // Filter by artwork's fields
                    ->orWhereHas('artwork', function ($query) use ($search) {
                        $query->where('title', 'REGEXP', $search)
                            ->orWhere('slug', 'REGEXP', $search)
                            ->orWhere('description', 'REGEXP', $search)
                            ->orWhere('price', 'REGEXP', $search)
                            ->orWhere('series', 'REGEXP', $search);
                    });
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
