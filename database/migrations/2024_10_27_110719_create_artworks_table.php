<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('artworks', function (Blueprint $table) {
            $table->id();
            $table->string('artwork_code');
            $table->string('title');
            $table->string('slug')->unique();
            $table->string('cover')->nullable();
            $table->text('description');
            $table->unsignedInteger('price')->default(0);
            $table->string('series')->nullable();
            $table->unsignedInteger('frame_width')->default(0);
            $table->unsignedInteger('frame_height')->default(0);
            $table->foreignId('category_id')->constrained('categories')->cascadeOnDelete();
            $table->string('qr_code_url');
            $table->string('qr_code_image');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('artworks');
    }
};
