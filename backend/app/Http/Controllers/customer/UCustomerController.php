<?php

namespace App\Http\Controllers\customer;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\BlogComment;

class UCustomerController extends Controller
{
    function userdashboard(){
        $data = ['LoggedUserInfo'=>user::where('id','=', session('LoggedUser'))->first()];
        return view('customer.dashboard', $data);
    }
    function usersettings(){
        $data = ['LoggedUserInfo'=>user::where('id','=', session('LoggedUser'))->first()];
        return view('customer.settings', $data);
    }

    function userprofile(){
        $data = ['LoggedUserInfo'=>user::where('id','=', session('LoggedUser'))->first()];
        return view('customer.profile', $data);
    }

    public function userComment()
    {
        $comments=BlogComment::getAllUserComments();
        return view('user.comment.index')->with('comments',$comments);
    }
    public function userCommentDelete($id){
        $comment=BlogComment::find($id);
        if($comment){
            $status=$comment->delete();
            if($status){
                request()->session()->flash('success','Blog Comment successfully deleted');
            }
            else{
                request()->session()->flash('error','Error occurred please try again');
            }
            return back();
        }
        else{
            request()->session()->flash('error','Blog Comment not found');
            return redirect()->back();
        }
    }
    public function userCommentEdit($id)
    {
        $comments=BlogComment::find($id);
        if($comments){
            return view('user.comment.edit')->with('comment',$comments);
        }
        else{
            request()->session()->flash('error','Comment not found');
            return redirect()->back();
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function userCommentUpdate(Request $request, $id)
    {
        $comment=BlogComment::find($id);
        if($comment){
            $data=$request->all();
            // return $data;
            $status=$comment->fill($data)->update();
            if($status){
                request()->session()->flash('success','Comment successfully updated');
            }
            else{
                request()->session()->flash('error','Something went wrong! Please try again!!');
            }
            return redirect()->route('user.blog-comment.index');
        }
        else{
            request()->session()->flash('error','Comment not found');
            return redirect()->back();
        }

    }
}
