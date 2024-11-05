<?php

namespace App\Http\Resources\Admin;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CollectorResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'collector_code' => $this->collector_ccode,
            'user' => $this->whenLoaded('user', [
                'id' => $this->user->id,
                'name' => $this->user->name,
            ]),

            'artwork' => $this->whenLoaded('artwork', [
                'id' => $this->artwork->id,
                'title' => $this->artwork->title,
            ]),
        ];
    }
}
