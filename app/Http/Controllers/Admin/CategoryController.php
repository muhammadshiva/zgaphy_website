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
            ->paginate(10);

        return inertia('Admin/Categories/Index', props: [
            'categories' => CategoryResource::collection($categories)->additional([
                'meta' => [
                    'has_pages' => $categories->hasPages(),
                ]
            ]),
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

    public function edit(Category $category): Response
    {
        return inertia('Admin/Categories/Edit', [
            'page_settings' => [
                'title' => 'Edit Category',
                'subtitle' => 'Edit the category details',
                'method' => 'PUT',
                'action' => route('admin.categories.update', $category),
            ],

            'category' => $category
        ]);
    }

    public function update(Category $category, CategoryRequest $request): RedirectResponse
    {

        try {

            $category->update([
                'name' => $name = $request->name,
                'slug' => $name !== $category->name ? str()->lower(str()->slug($name) . str()->random(4)) : $category->slug,
                'description' => $request->description,
                'cover' => $this->update_file($request, $category, 'cover', 'categories'),
            ]);

            flashMessage(MessageType::UPDATED->message('Category'));

            return to_route('admin.categories.index');
        } catch (\Throwable $th) {
            flashMessage(MessageType::ERROR->message(error: $th->getMessage()), 'error');
            return to_route('admin.categories.index');
        }
    }

    public function destroy(Category $category): RedirectResponse
    {
        try {

            $this->delete_file($category, 'cover');


            $category->delete();
            flashMessage(MessageType::DELETED->message('Category'));
            return to_route('admin.categories.index');
        } catch (\Throwable $th) {
            flashMessage(MessageType::ERROR->message(error: $th->getMessage()), 'error');
            return to_route('admin.categories.index');
        }
    }
}
