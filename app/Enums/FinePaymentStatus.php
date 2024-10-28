<?php

namespace App\Enums;

enum FinePaymentStatus: string
{
    case UNPAID = 'Belum bayar';
    case PENDING = 'Tertunda';
    case CONFIRMED = 'Dikonfirmasi';
    case UNCONFIRMED = 'Belum Dikonfirmasi';
    case PAID = 'Sukses';
    case REFUNDED = 'Dikembalikan';
    case CANCELLED = 'Dibatalkan';

    public static function option(): array
    {
        return collect(self::cases())->map(fn($item) => [
            'value' => $item->value,
            'label' => $item->name,
        ])->values()->toArray();
    }
}
