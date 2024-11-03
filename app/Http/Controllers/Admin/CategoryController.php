<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\CategoryResource;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Response;

class CategoryController extends Controller
{
    public function index(): Response
    {
        $categories = Category::query()
            ->select(['id', 'name', 'slug', 'cover', 'created_at'])
            ->get();


        return inertia('Admin/Categories/Index', props: [
            'categories' => CategoryResource::collection($categories),
            'page_settings' => [
                'title' => 'Category',
                'subtitle' => 'Show all categories data available',
            ],
        ]);
    }
}
