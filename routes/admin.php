<?php

use App\Http\Controllers\Admin\ArtworkController;
use App\Http\Controllers\Admin\CategoryController;
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
});
