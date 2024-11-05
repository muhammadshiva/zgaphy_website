<?php

namespace App\Http\Resources\Admin;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;


class ArtworkResource extends JsonResource
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
            'artwork_code' => $this->artwork_code,
            'title' => $this->title,
            'slug' => $this->slug,
            'cover' => $this->cover ? Storage::url($this->cover) : null,
            'description' => $this->description,
            'price' => number_format($this->price, 0, ',', '.'),
            'series' => $this->series,
            'frame_width' => $this->frame_width,
            'frame_height' => $this->frame_height,
            'category' => [
                'id' => $this->category?->id,
                'name' => $this->category?->name,
                'cover' => $this->category?->cover,
            ],
            'stock' => [
                'available' => $this->stock?->available,
                'only_produced' => $this->stock?->only_produced,
            ],
            'created_at' => $this->created_at->format('d M Y'),
            'qr_code_url' => $this->qr_code_url,
            'qr_code_image' => $this->qr_code_image,
        ];
    }
}
