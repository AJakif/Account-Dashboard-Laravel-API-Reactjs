<?php

namespace App\Http\Controllers\account\Blog;

use App\Http\Controllers\Controller;
use App\Models\BlogCategory;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class BlogCategoryController extends Controller
{
    public function index()
    {
        $data = ['LoggedUserInfo'=>User::where('id','=', session('LoggedUser'))->first()];
        $blogCategory=BlogCategory::orderBy('id','DESC')->paginate(10);
        return response()->json([$data,'bloogcatagories'=>$blogCategory],200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $data = ['LoggedUserInfo'=>user::where('id','=', session('LoggedUser'))->first()];
        return response()->json([$data],200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // return $request->all();
        $this->validate($request,[
            'title'=>'string|required',
            'status'=>'required|in:active,inactive'
        ]);
        $data=$request->all();
        $slug=Str::slug($request->title);
        $count=BlogCategory::where('slug',$slug)->count();
        if($count>0){
            $slug=$slug.'-'.date('ymdis').'-'.rand(0,999);
        }
        $data['slug']=$slug;
        $status=BlogCategory::create($data);
        if($status){
            $message = "Blog Caatagory Succesfully Added";
            return response()->json([$status,$message],200);
        }
        else{
            $message = "Error please try again";
            return response()->json([$status,$message],200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $data = ['LoggedUserInfo'=>user::where('id','=', session('LoggedUser'))->first()];
        $blogCategory=BlogCategory::findOrFail($id);
        return response()->json([$data,'blogcatagories'=>$blogCategory],200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $blogCategory=BlogCategory::findOrFail($id);
         // return $request->all();
         $this->validate($request,[
            'title'=>'string|required',
            'status'=>'required|in:active,inactive'
        ]);
        $data=$request->all();
        $status=$blogCategory->fill($data)->save();
        if($status){
            $message = "Blog Catagory Succesfully Updated";
            return response()->json([$status,$message],200);
        }
        else{
            $message = "Error please try again";
            return response()->json([$status,$message],200);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $blogCategory=BlogCategory::findOrFail($id);
       
        $status=$blogCategory->delete();
        
        if($status){
            $message = "Blog Catagory Succesfully Deleted";
            return response()->json([$status,$message],200);
        }
        else{
            $message = "Error please try again";
            return response()->json([$status,$message],200);
        }
    }
}
