<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Stock extends Model
{
    protected $fillable = [
        'artwork_id',
        'available',
        'only_produced',
    ];
}
