<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

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
}
