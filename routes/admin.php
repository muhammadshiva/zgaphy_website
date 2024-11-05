<?php

use App\Http\Controllers\Admin\ArtworkController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\CollectorController;
use App\Http\Controllers\Admin\UserController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth'])->prefix('admin')->group(function () {

    Route::controller(CategoryController::class)->group(function () {
        Route::get('categories', 'index')->name('admin.categories.index');
        Route::get('categories/create', 'create')->name('admin.categories.create');
        Route::post('categories/create', 'store')->name('admin.categories.store');
        Route::get('categories/edit/{category}', 'edit')->name('admin.categories.edit');
        Route::put('categories/edit/{category}', 'update')->name('admin.categories.update');
        Route::delete('categories/destroy/{category}', 'destroy')->name('admin.categories.destroy');
    });

    Route::controller(ArtworkController::class)->group(function () {
        Route::get('artworks', 'index')->name('admin.artworks.index');
        Route::get('artworks/create', 'create')->name('admin.artworks.create');
        Route::post('artworks/create', 'store')->name('admin.artworks.store');
        Route::get('artworks/edit/{artwork}', 'edit')->name('admin.artworks.edit');
        Route::put('artworks/edit/{artwork}', 'update')->name('admin.artworks.update');
        Route::delete('artworks/destroy/{artwork}', 'destroy')->name('admin.artworks.destroy');
    });

    Route::controller(UserController::class)->group(function () {
        Route::get('users', 'index')->name('admin.users.index');
        Route::get('users/create', 'create')->name('admin.users.create');
        Route::post('users/create', 'store')->name('admin.users.store');
        Route::get('users/edit/{user}', 'edit')->name('admin.users.edit');
        Route::put('users/edit/{user}', 'update')->name('admin.users.update');
        Route::delete('users/destroy/{user}', 'destroy')->name('admin.users.destroy');
    });


    Route::controller(CollectorController::class)->group(function () {
        Route::get('collectors', 'index')->name('admin.collectors.index');
    });
});
