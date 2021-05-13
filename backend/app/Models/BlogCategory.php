<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BlogCategory extends Model
{
    use HasFactory;
    protected $fillable=['title','slug','status'];

    public function blog(){
        return $this->hasMany('App\Models\Blog','blog_cat_id','id')->where('status','active');
    }

    public static function getBlogByCategory($slug){
        return BlogCategory::with('blog')->where('slug',$slug)->first();
    }
}
