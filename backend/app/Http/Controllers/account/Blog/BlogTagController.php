<?php

namespace App\Http\Controllers\account\Blog;

use App\Http\Controllers\Controller;
use App\Models\BlogTag;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class BlogTagController extends Controller
{
    public function index()
    {
        $data = ['LoggedUserInfo'=>User::where('id','=', session('LoggedUser'))->first()];
        $blogTag=BlogTag::orderBy('id','DESC')->paginate(10);
        return response()->json([$data,'blogtags'=>$blogTag],200);
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
        $this->validate($request,[
            'title'=>'string|required',
            'status'=>'required|in:active,inactive'
        ]);
        $data=$request->all();
        $slug=Str::slug($request->title);
        $count=BlogTag::where('slug',$slug)->count();
        if($count>0){
            $slug=$slug.'-'.date('ymdis').'-'.rand(0,999);
        }
        $data['slug']=$slug;
        $status=BlogTag::create($data);
        if($status){
            $message = "Blog Tag Succesfully created";
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
        $blogTag=BlogTag::findOrFail($id);
        return response()->json([$data,'blogtags'=>$blogTag],200);
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
        $blogTag=BlogTag::findOrFail($id);
         // return $request->all();
         $this->validate($request,[
            'title'=>'string|required',
            'status'=>'required|in:active,inactive'
        ]);
        $data=$request->all();
        $status=$blogTag->fill($data)->save();
        if($status){
            $message = "Blog Tag Succesfully Updated";
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
        $blogTag=BlogTag::findOrFail($id);
       
        $status=$blogTag->delete();
        
        if($status){
            $message = "Blog Tag Succesfully deleted";
            return response()->json([$status,$message],200);
        }
        else{
            $message = "Error please try again";
            return response()->json([$status,$message],200);
        }
    }
}
