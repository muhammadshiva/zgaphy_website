<?php

namespace App\Enums;

enum UserGender: string
{
    case MALE = 'Pria';
    case FEMALE = 'Wanita';
    case OTHER = 'Lainnya';

    public static function option(): array
    {
        return collect(self::cases())->map(fn($item) => [
            'value' => $item->value,
            'label' => $item->name,
        ])->values()->toArray();
    }
}
