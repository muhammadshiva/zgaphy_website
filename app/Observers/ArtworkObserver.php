<?php

namespace App\Observers;

use App\Models\Artwork;

class ArtworkObserver
{
    public function created(Artwork $artwork)
    {
        $artwork->stock()->create([
            'total' => $total = request()->total,
            'available' => $total,
        ]);
    }
}
