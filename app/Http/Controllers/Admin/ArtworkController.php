<?php

namespace App\Http\Controllers\Admin;

use App\Enums\MessageType;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\ArtworkRequest;
use App\Http\Resources\Admin\ArtworkResource;
use App\Models\Artwork;
use App\Models\Category;
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
            ->filter(request()->only(['search']))
            ->sorting(request()->only(['field', 'direction']))
            ->with(['category'])
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

            Artwork::create([
                'artwork_code' => str()->random(6),
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
}
