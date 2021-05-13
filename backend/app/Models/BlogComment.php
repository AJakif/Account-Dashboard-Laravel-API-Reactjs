<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BlogComment extends Model
{
    use HasFactory;
    protected $fillable=['user_id','blog_id','comment','replied_comment','parent_id','status'];

    public function user_info(){
        return $this->hasOne('App\Models\User','id','user_id');
    }
    public static function getAllComments(){
        return BlogComment::with('user_info')->paginate(10);
    }

    public static function getAllUserComments(){
        return BlogComment::where('user_id',session()->get('LoggedUser'))->with('user_info')->paginate(10);
    }

    public function blog(){
        return $this->belongsTo(Blog::class);
    }

    public function replies(){
        return $this->hasMany(BlogComment::class,'parent_id')->where('status','active');
    }
}
