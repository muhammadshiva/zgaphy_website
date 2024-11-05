<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Response;


class UserController extends Controller
{
    public function index(): Response
    {
        $user = User::query()
            ->select(['id', 'name', 'username', 'email', 'phone', 'avatar', 'gender', 'date_of_birth', 'address', 'created_at', 'updated_at'])
            ->filter(request()->only(['search']))
            ->sorting(request()->only(['field', 'direction']))
            ->paginate(request()->load ?? 10)
            ->withQueryString();

        return inertia('Admin/Users/Index', [

            'page_settings' => [
                'title' => 'User',
                'subtitle' => 'Show all Users',
            ],

            'users' => UserResource::collection($user)->additional([
                'meta' => [
                    'has_pages' => $user->hasPages(),
                ]
            ]),

            'state' => [
                'page' => request()->page ?? 1,
                'search' => request()->search ?? '',
                'load' => 10,
            ],

        ]);
    }
}
