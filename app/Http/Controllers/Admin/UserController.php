<?php

namespace App\Http\Controllers\Admin;

use App\Enums\MessageType;
use App\Enums\UserGender;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\UserRequest;
use App\Http\Resources\Admin\UserResource;
use App\Models\User;
use App\Traits\HasFile;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Response;


class UserController extends Controller
{
    use HasFile;
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

    public function create(): Response
    {
        return inertia('Admin/Users/Create', [
            'page_settings' => [
                'title' => 'Add User',
                'subtitle' => 'Add a new User. Click save after creating a new User.',
                'method' => 'POST',
                'action' => route('admin.users.create'),
            ],

            'genders' => UserGender::options(),
        ]);
    }

    public function store(UserRequest $request): RedirectResponse
    {
        try {
            $user = User::create([
                'name' => $name = $request->name,
                'username' => usernameGenerator($name),
                'email' => $request->email,
                'phone' => $request->phone,
                'password' => Hash::make(request()->password),
                'gender' => $request->gender,
                'date_of_birth' => $request->date_of_birth,
                'address' => $request->address,
                'avatar' => $this->upload_file($request, 'avatar', 'users'),
            ]);

            flashMessage(MessageType::CREATED->message('User'));
            return to_route('admin.users.index');
        } catch (\Throwable $e) {
            flashMessage(MessageType::ERROR->message(error: $e->getMessage()));
            return to_route('admin.users.index');
        }
    }




    public function edit(User $user): Response
    {
        return inertia('Admin/Users/Edit', [
            'page_settings' => [
                'title' => 'Edit User',
                'subtitle' => 'Edit an user. Click save after editing an user.',
                'method' => 'PUT',
                'action' => route('admin.users.update', $user),
            ],

            'genders' => UserGender::options(),

            'user' => $user,
        ]);
    }

    public function update(User $user, UserRequest $request): RedirectResponse
    {
        try {
            $user->update([
                'name' => $name = $request->name,
                'username' => usernameGenerator($name),
                'email' => $request->email,
                'phone' => $request->phone,
                'password' => Hash::make(request()->password),
                'gender' => $request->gender,
                'date_of_birth' => $request->date_of_birth,
                'address' => $request->address,
                'avatar' => $this->update_file($request, $user, 'avatar', 'users'),
            ]);

            flashMessage(MessageType::UPDATED->message('User'));
            return to_route('admin.users.index');
        } catch (\Throwable $e) {
            flashMessage(MessageType::ERROR->message(error: $e->getMessage()));
            return to_route('admin.users.index');
        }
    }

    public function destroy(User $user): RedirectResponse
    {
        try {
            $this->delete_file($user, 'avatar');
            $user->delete();
            flashMessage(MessageType::DELETED->message('User'));
            return to_route('admin.users.index');
        } catch (\Throwable $e) {
            flashMessage(MessageType::ERROR->message(error: $e->getMessage()));
            return to_route('admin.users.index');
        }
    }
}
