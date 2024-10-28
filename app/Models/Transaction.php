<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Transaction extends Model
{
    protected $fillable = [
        'transaction_code',
        'transfer_proof',
        'payment_status',
        'user_id',
        'artwork_id',
        'collector_id',
    ];

    // Relasi ke User (Transaksi dimiliki oleh satu user)
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    // Relasi ke Artwork (Transaksi melibatkan satu artwork)
    public function artwork(): BelongsTo
    {
        return $this->belongsTo(Artwork::class);
    }

    // Relasi ke Collector (Transaksi melibatkan satu collector)
    public function collector(): BelongsTo
    {
        return $this->belongsTo(Collector::class);
    }
}
