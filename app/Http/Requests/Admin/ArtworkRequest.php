<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class ArtworkRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [

            'title' => ['required', 'string', 'max:255'],
            'description' => ['nullable', 'string'],
            'category_id' =>
            [
                'required',
                'exists:categories,id'
            ],
            'price' => ['required', 'numeric', 'min:0'],
            'image' => ['nullable', 'mimes:jpeg,png,jpg,webp', 'max:2048'],
            'frame_width' => ['required', 'integer', 'min:0'],
            'frame_height' => ['required', 'integer', 'min:0'],
            'series' => ['nullable', 'string'],
            'qr_code_image' => ['nullable', 'mimes:jpeg,png,jpg,webp', 'max:2048'],
            'qr_code_url' => ['nullable', 'url'],

        ];
    }

    public function attributes(): array
    {
        return [
            'title' => 'Title',
            'description' => 'Description',
            'category_id' => 'Category',
            'price' => 'Price',
            'image' => 'Image',
            'frame_width' => 'Frame Width',
            'frame_height' => 'Frame Height',
            'series' => 'Series',
            'qr_code_image' => 'QR Code Image',
            'qr_code_url' => 'QR Code URL',
        ];
    }
}
