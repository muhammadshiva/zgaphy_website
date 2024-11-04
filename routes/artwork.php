<?php

use App\Http\Controllers\Admin\ArtworkController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth'])->prefix('artwork')->group(function () {

    Route::controller(ArtworkController::class)->group(function () {
        Route::get('artworks', 'index')->name('admin.artworks.index');
        Route::get('artworks/create', 'create')->name('admin.artworks.create');
        Route::get('artworks/create', 'store')->name('admin.artworks.store');
        Route::get('artworks/edit/{artwork}', 'edit')->name('admin.artworks.edit');
        Route::get('artworks/edit/{artwork}', 'update')->name('admin.artworks.update');
        Route::get('artworks/destroy/{artwork}', 'destroy')->name('admin.artworks.destroy');
    });
});
