<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    use HasFactory;
    protected $fillable=['title','tags','summary','slug','description','photo','quote','blog_cat_id','blog_tag_id','added_by','status'];


    public function cat_info(){
        return $this->hasOne('App\Models\BlogCategory','id','blog_cat_id');
    }
    public function tag_info(){
        return $this->hasOne('App\Models\BlogTag','id','blog_tag_id');
    }

    public function author_info(){
        return $this->hasOne('App\Models\User','id','added_by');
    }
    public static function getAllBlog(){
        return Blog::with(['cat_info','author_info'])->orderBy('id','DESC')->paginate(10);
    }
    // public function get_comments(){
    //     return $this->hasMany('App\Models\PostComment','post_id','id');
    // }
    public static function getBlogBySlug($slug){
        return Blog::with(['tag_info','author_info'])->where('slug',$slug)->where('status','active')->first();
    }

    public function comments(){
        return $this->hasMany(BlogComment::class)->whereNull('parent_id')->where('status','active')->with('user_info')->orderBy('id','DESC');
    }
    public function allComments(){
        return $this->hasMany(BlogComment::class)->where('status','active');
    }


    // public static function getProductByCat($slug){
    //     // dd($slug);
    //     return Category::with('products')->where('slug',$slug)->first();
    //     // return Product::where('cat_id',$id)->where('child_cat_id',null)->paginate(10);
    // }

    // public static function getBlogByCategory($id){
    //     return Post::where('post_cat_id',$id)->paginate(8);
    // }
    public static function getBlogByTag($slug){
        // dd($slug);
        return Blog::where('tags',$slug)->paginate(8);
    }

    public static function countActiveBlog(){
        $data=Blog::where('status','active')->count();
        if($data){
            return $data;
        }
        return 0;
    }
}
