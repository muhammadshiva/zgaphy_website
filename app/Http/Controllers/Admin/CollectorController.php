<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\CollectorResource;
use App\Models\Collector;
use Illuminate\Http\Request;
use Inertia\Response;

class CollectorController extends Controller
{
    public function index(): Response
    {
        $collectors = Collector::query()
            ->select(['id', 'collector_code', 'user_id', 'artwork_id', 'created_at'])
            ->filter(request()->only(['search']))
            ->sorting(request()->only(['field', 'direction']))
            ->with(['user', 'artwork'])
            ->paginate(request()->load ?? 10)
            ->withQueryString();

        return inertia('Admin/Collectors/Index', [
            'collectors' => CollectorResource::collection($collectors)->additional([
                'meta' => [
                    'has_pages' => $collectors->hasPages(),
                ]
            ]),
            'page_settings' => [
                'title' => 'Collector',
                'subtitle' => 'Show all Collectors',
            ],
            'state' => [
                'page' => request()->page ?? 1,
                'search' => request()->search ?? '',
                'load' => 10,
            ],
        ]);
    }
}
