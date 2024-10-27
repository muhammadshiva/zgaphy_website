<?php

namespace App\Enums;

enum ArtworkLanguage: string
{
    case ENGLISH = 'English';
    case INDONESIAN = 'Indonesian';

    public static function option(): array
    {

        return collect(self::cases())->map(fn($item) => [
            'value' => $item->value,
            'label' => $item->name,
        ])->values()->toArray();
    }
}
