<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class CategoryRequest extends FormRequest
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
            'name' => ['required', 'string', 'max:255', 'min:3'],
            'description' => ['nullable'],
            'cover' => ['nullable', 'max:2048', 'mimes:jpeg,png,jpg,webp'],

        ];
    }

    public function attributes(): array
    {
        return [

            'name' => 'Name',
            'description' => 'Description',
            'cover' => 'Cover',
        ];
    }
}
