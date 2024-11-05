<?php

namespace App\Http\Controllers\Admin;

use App\Enums\MessageType;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\ArtworkRequest;
use App\Http\Resources\Admin\ArtworkResource;
use App\Models\Artwork;
use App\Models\Category;
use App\Models\Stock;
use App\Traits\HasFile;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Response;

class ArtworkController extends Controller
{
    use HasFile;

    public function index(): Response
    {
        $artwork = Artwork::query()
            ->select([
                'id',
                'artwork_code',
                'title',
                'slug',
                'cover',
                'description',
                'price',
                'series',
                'frame_width',
                'frame_height',
                'category_id',
                'qr_code_url',
                'qr_code_image',
                'created_at',
            ])
            ->with(['category', 'stock'])
            ->filter(request()->only(['search']))
            ->sorting(request()->only(['field', 'direction']))
            ->latest('created_at')
            ->paginate(request()->load ?? 10)
            ->withQueryString();

        return inertia('Admin/Artworks/Index', props: [
            'artworks' => ArtworkResource::collection($artwork)->additional([
                'meta' => [
                    'has_pages' => $artwork->hasPages(),
                ]
            ]),
            'page_settings' => [
                'title' => 'Artwork',
                'subtitle' => 'Show all artworks data available',
            ],
            'state' => [
                'page' => request()->page ?? 1,
                'search' => request()->search ?? '',
                'load' => 10,
            ],
        ]);
    }

    public function create(): Response
    {
        return inertia('Admin/Artworks/Create', props: [
            'page_settings' => [
                'title' => 'Add Artwork',
                'subtitle' => 'Add a new artwork. Click save after creating a new artwork.',
                'method' => 'POST',
                'action' => route('admin.artworks.store')
            ],
            'page_data' => [
                'categories' => Category::query()->select(['id', 'name'])->get()->map(fn($item) => [
                    'value' => $item->id,
                    'label' => $item->name,
                ])
            ],
        ]);
    }

    public function store(ArtworkRequest $request): RedirectResponse
    {
        try {

            $artwork = Artwork::create([
                'artwork_code' => $this->artworkCode(
                    $request->category_id,
                ),
                'title' => $title = $request->title,
                'slug' => str()->lower(str()->slug($title) . str()->random(4)),
                'cover' => $this->upload_file($request, 'cover', 'artworks'),
                'description' => $request->description,
                'price' => $request->price,
                'series' => $request->series,
                'frame_width' => $request->frame_width,
                'frame_height' => $request->frame_height,
                'category_id' => $request->category_id,
                'qr_code_url' => $request->qr_code_url,
                'qr_code_image' => $request->qr_code_image,
            ]);

            flashMessage(MessageType::CREATED->message('Artwork'));
            return to_route('admin.artworks.index');
        } catch (\Throwable $e) {
            flashMessage(MessageType::ERROR->message(error: $e->getMessage()), 'error');
            return to_route('admin.artworks.index');
        }
    }

    public function artworkCode(int $category_id): string
    {

        $category = Category::find($category_id);

        $last_artwork = Artwork::query()
            ->orderByDesc('artwork_code')
            ->first();

        $order = 1;

        if ($last_artwork) {
            $last_order = (int) substr($last_artwork->artwork_code, -4);
            $order = $last_order + 1;
        }

        $ordering = str_pad($order, 4, '0', STR_PAD_LEFT);

        return 'ZG' . '.' . str()->slug($category->name) . '.' . $ordering;
    }


    public function edit(Artwork $artwork): Response
    {
        return inertia('Admin/Artworks/Edit', props: [
            'page_settings' => [
                'title' => 'Edit Artwork',
                'subtitle' => 'Edit an artwork. Click save after editing the artwork.',
                'method' => 'PUT',
                'action' => route('admin.artworks.edit', $artwork)
            ],
            'artwork' => $artwork,
            'page_data' => [
                'categories' => Category::query()->select(['id', 'name'])->get()->map(fn($item) => [
                    'value' => $item->id,
                    'label' => $item->name,
                ])
            ],
        ]);
    }

    public function update(Artwork $artwork, ArtworkRequest $request): RedirectResponse
    {
        try {

            $artwork->update([
                'artwork_code' => $this->artworkCode(
                    $request->category_id,
                ),
                'title' => $title = $request->title,
                'slug' => $title !== $artwork->title ? str()->lower(str()->slug($title) . str()->random(4)) : $artwork->slug,
                'cover' => $this->update_file($request, $artwork, 'cover', 'artworks'),
                'description' => $request->description,
                'price' => $request->price,
                'series' => $request->series,
                'frame_width' => $request->frame_width,
                'frame_height' => $request->frame_height,
                'category_id' => $request->category_id,
                'qr_code_url' => $request->qr_code_url,
                'qr_code_image' => $request->qr_code_image,
            ]);

            flashMessage(MessageType::UPDATED->message('Artwork'));
            return to_route('admin.artworks.index');
        } catch (\Throwable $e) {
            flashMessage(MessageType::ERROR->message(error: $e->getMessage()), 'error');
            return to_route('admin.artworks.index');
        }
    }

    public function destroy(Artwork $artwork): RedirectResponse
    {
        try {

            $this->delete_file($artwork, 'cover');
            $artwork->delete();

            flashMessage(MessageType::DELETED->message('Artwork'));
            return to_route('admin.artworks.index');
        } catch (\Throwable $e) {
            flashMessage(MessageType::ERROR->message(error: $e->getMessage()), 'error');
            return to_route('admin.artworks.index');
        }
    }
}
