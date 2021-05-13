<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Admin;
use App\Models\Blog;
use App\Models\BlogCategory;
use App\Models\BlogTag;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function home(){
       
        $blogs=Blog::where('status','active')->orderBy('id','DESC')->limit(3)->get();
        return view('frontend.index')
                ->with('blogs',$blogs);
    } 

    
    function register(){
        return view('reg.register');
    }
    function save(Request $request){
        
        //Validate requests
        $request->validate([
            'fullname' => 'required | min:3 | max:30 ',
            'username' => 'required | min:3 | max:20',
            'email' => 'required | min:10 | max:50 | email | unique:users',
            'password' => 'required | min:8 | max:20 | alpha_num',
            'cpassword' => 'required | same:password',
          //  'address' => 'required',
           // 'company' => 'required | min:3 | max:20',
           // 'number' => 'required|digits:11',
           // 'city' => 'required | min:3 | max:20',
            //'country' => 'required | min:3 | max:20',

        ]);

                 //Insert data into database
                 $user = new user;
                  $user->fullname = $request->fullname;
                 $user->username = $request->username;
                 $user->email = $request->email;
                 $user->password = Hash::make($request->password);
              //   $user->address = $request->address;
             //    $user->company = $request->company;
                /*  $user->number = $request->number; */
                // $user->city = $request->city;
               //  $user->country = $request->country;
                 $user->type = 'user';
                 $save = $user->save();

                 if($save){
                    $message = "Registration Successfull";
                    return response()->json([$message,$save],200);

                 }else{
                    $message = "Error Try again";
                    return response()->json([$message,$save],200);
                 }
    }
    
    public function delete($id){

        $user = User::find($id);
        return view('admin.Dashboard.delete')->with('user', $user);
    }

    public function destroy($id){

        if(User::destroy($id)){
            return redirect('/home/userlist');
        }else{
            return redirect('/home/delete/'.$id);
        }

    }

    public function blog(){
        $blog=Blog::query();
        
        if(!empty($_GET['category'])){
            $slug=explode(',',$_GET['category']);
            // dd($slug);
            $cat_ids=BlogCategory::select('id')->whereIn('slug',$slug)->pluck('id')->toArray();
            return $cat_ids;
            $blog->whereIn('blog_cat_id',$cat_ids);
            // return $post;
        }
        if(!empty($_GET['tag'])){
            $slug=explode(',',$_GET['tag']);
            // dd($slug);
            $tag_ids=BlogTag::select('id')->whereIn('slug',$slug)->pluck('id')->toArray();
            // return $tag_ids;
            $blog->where('blog_tag_id',$tag_ids);
            // return $post;
        }

        if(!empty($_GET['show'])){
            $blog=$blog->where('status','active')->orderBy('id','DESC')->paginate($_GET['show']);
        }
        else{
            $blog=$blog->where('status','active')->orderBy('id','DESC')->paginate(9);
        }
        // $post=Post::where('status','active')->paginate(8);
        $rcnt_blog=Blog::where('status','active')->orderBy('id','DESC')->limit(3)->get();
        return view('frontend.pages.blog')->with('blogs',$blog)->with('recent_blogs',$rcnt_blog);
    }

    public function blogDetail($slug){
        $blog=BLog::getBlogBySlug($slug);
        $rcnt_blog=Blog::where('status','active')->orderBy('id','DESC')->limit(3)->get();
        // return $post;
        return view('frontend.pages.blog-details')->with('blog',$blog)->with('recent_blogs',$rcnt_blog);
    }

    public function blogSearch(Request $request){
        // return $request->all();
        $rcnt_blog=Blog::where('status','active')->orderBy('id','DESC')->limit(3)->get();
        $blogs=Blog::orwhere('title','like','%'.$request->search.'%')
            ->orwhere('quote','like','%'.$request->search.'%')
            ->orwhere('summary','like','%'.$request->search.'%')
            ->orwhere('description','like','%'.$request->search.'%')
            ->orwhere('slug','like','%'.$request->search.'%')
            ->orderBy('id','DESC')
            ->paginate(8);
        return view('frontend.pages.blog')->with('blogs',$blogs)->with('recent_blogs',$rcnt_blog);
    }

    public function blogFilter(Request $request){
        $data=$request->all();
        // return $data;
        $catURL="";
        if(!empty($data['category'])){
            foreach($data['category'] as $category){
                if(empty($catURL)){
                    $catURL .='&category='.$category;
                }
                else{
                    $catURL .=','.$category;
                }
            }
        }

        $tagURL="";
        if(!empty($data['tag'])){
            foreach($data['tag'] as $tag){
                if(empty($tagURL)){
                    $tagURL .='&tag='.$tag;
                }
                else{
                    $tagURL .=','.$tag;
                }
            }
        }
        // return $tagURL;
            // return $catURL;
        return redirect()->route('blog',$catURL.$tagURL);
    }

    public function blogByCategory(Request $request){
        $blog=BlogCategory::getBlogByCategory($request->slug);
        $rcnt_blog=Blog::where('status','active')->orderBy('id','DESC')->limit(3)->get();
        return view('frontend.pages.blog')->with('blogs',$blog->blog)->with('recent_blogs',$rcnt_blog);
    }

    public function blogByTag(Request $request){
        // dd($request->slug);
        $blog=Blog::getBlogByTag($request->slug);
        // return $post;
        $rcnt_blog=Blog::where('status','active')->orderBy('id','DESC')->limit(3)->get();
        return view('frontend.pages.blog')->with('blogs',$blog)->with('recent_blogs',$rcnt_blog);
    }
 //end of main   
}
