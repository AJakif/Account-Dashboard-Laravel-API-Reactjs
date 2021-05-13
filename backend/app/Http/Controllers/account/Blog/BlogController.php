<?php

namespace App\Http\Controllers\account\Blog;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use App\Models\BlogCategory;
use App\Models\BlogTag;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class BlogController extends Controller
{
    public function index()
    {
        $data = ['LoggedUserInfo'=>user::where('id','=', session('LoggedUser'))->first()];
        $blogs=Blog::getAllBlog();
        return response()->json([$data,'blogs'=>$blogs],200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $data = ['LoggedUserInfo'=>user::where('id','=', session('LoggedUser'))->first()];
        $categories=BlogCategory::get();
        $tags=BlogTag::get();
        $users=User::get();
        return response()->json([$data,'blogcatagory'=>$categories,'blogtags'=>$tags,'users'=>$users],200);
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
            'quote'=>'string|nullable',
            'summary'=>'string|required',
            'description'=>'string|nullable',
            'photo'=>'string|nullable',
            'tags'=>'nullable',
            'added_by'=>'required',
            'blog_cat_id'=>'required',
            'status'=>'required|in:active,inactive'
        ]);

        $blog=new Blog;
        $data=$request->all();

        $slug=Str::slug($request->title);
        $count=Blog::where('slug',$slug)->count();
        if($count>0){
            $slug=$slug.'-'.date('ymdis').'-'.rand(0,999);
        }
        $data['slug']=$slug;

        $tags=$request->input('tags');
        if($tags){
            $data['tags']=implode(',',$tags);
        }
        else{
            $data['tags']='';
        }
        // return $data;

        if ($request->hasFile('myfile')) {
            $file = $request->file('myfile');
            $fileName =  $blog->id . '.' .  $file->getClientOriginalExtension();
            //$request->photo->move(public_path('/upload/blog_image'), $fileName);
           if ($file->move(public_path('/upload/blog_image'), $fileName)) {
                $data['photo']= $fileName;
                $status=$blog->fill($data)->save();
               
            } 
           
        }

        $status=$blog->fill($data)->save();
        if($status){
            $message = "Blog Succesfully Added";
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
        $blog=Blog::findOrFail($id);
        $categories=BlogCategory::get();
        $tags=BlogTag::get();
        $users=User::get();
        return response()->json([$data,'blog'=>$blog,'blogcatagory'=>$categories,'blogtags'=>$tags,'users'=>$users],200);
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
        $blog=Blog::findOrFail($id);
         // return $request->all();
         $this->validate($request,[
            'title'=>'string|required',
            'quote'=>'string|nullable',
            'summary'=>'string|required',
            'description'=>'string|nullable',
            'photo'=>'string|nullable',
            'tags'=>'nullable',
            'added_by'=>'nullable',
            'blog_cat_id'=>'required',
            'status'=>'required|in:active,inactive'
        ]);

        $data=$request->all();
        $tags=$request->input('tags');
        // return $tags;
        if($tags){
            $data['tags']=implode(',',$tags);
        }
        else{
            $data['tags']='';
        }
        // return $data;

        if ($request->hasFile('myfile')) {
            $file = $request->file('myfile');
            $fileName =  $id . '.' .  $file->getClientOriginalExtension();
            //$request->photo->move(public_path('/upload/blog_image'), $fileName);
           if ($file->move(public_path('/upload/blog_image'), $fileName)) {
                $data['photo']= $fileName;
                $status=$blog->fill($data)->save();
               
            } 
           
        }

        $status=$blog->fill($data)->save();
        if($status){
            $message = "Blog Succesfully Updated";
            return response()->json([$status,$message],200);
        }
        else{
            $message = "Error PLease try again";
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
        $blog=Blog::findOrFail($id);
       
        $status=$blog->delete();
        
        if($status){
            $message = "Blog Succesfully Deleted";
            return response()->json([$status,$message],200);
        }
        else{
            $message = "Error please try again";
            return response()->json([$status,$message],200);
        }
    }
}