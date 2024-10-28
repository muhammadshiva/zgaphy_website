<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Collector extends Model
{
    protected $fillable = [
        'collector_code',
        'user_id',
        'artwork_id',
    ];
}
