<?php

namespace App\Http\Controllers\Admin;

use App\Enums\MessageType;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\CategoryRequest;
use App\Http\Resources\Admin\CategoryResource;
use App\Models\Category;
use App\Traits\HasFile;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Response;

class CategoryController extends Controller
{
    use HasFile;

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

    public function create(): Response
    {
        return inertia('Admin/Categories/Create', props: [
            'page_settings' => [
                'title' => 'Add Category',
                'subtitle' => 'Add a new category. Click save after creating a new category',
                'method' => 'POST',
                'action' => route('admin.categories.store')
            ],
        ]);
    }

    public function store(CategoryRequest $request): RedirectResponse
    {
        try {
            Category::create([
                'name' => $name = $request->name,
                'slug' => str()->lower(str()->slug($name) . str()->random(4)),
                'description' => $request->description,
                'cover' => $this->upload_file($request, 'cover', 'categories'),
            ]);

            flashMessage(MessageType::CREATED->message('Category'));

            return to_route('admin.categories.index');
        } catch (\Throwable $e) {
            flashMessage(MessageType::ERROR->message(error: $e->getMessage()), 'error');

            return to_route('admin.categories.index');
        }
    }
}
