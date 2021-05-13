<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBlogsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('blogs', function (Blueprint $table) {
                $table->id();
                $table->string('title');
                $table->string('slug')->unique();
                $table->text('summary');
                $table->longText('description')->nullable();
                $table->text('quote')->nullable();
                $table->string('photo')->nullable();
                $table->string('tags')->nullable();

                $table->unsignedBigInteger('blog_cat_id')->nullable();
                $table->foreign('blog_cat_id')->references('id')->on('blog_categories')->onDelete('SET NULL');

                $table->unsignedBigInteger('blog_tag_id')->nullable();
                $table->foreign('blog_tag_id')->references('id')->on('blog_tags')->onDelete('SET NULL');

                $table->unsignedBigInteger('added_by')->nullable();
                $table->foreign('added_by')->references('id')->on('users')->onDelete('SET NULL');
                
                $table->enum('status',['active','inactive'])->default('active');

                $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('blogs');
    }
}
