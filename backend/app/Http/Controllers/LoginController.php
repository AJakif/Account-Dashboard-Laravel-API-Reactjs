<?php

namespace App\Http\Controllers;
use App\Models\User;
use App\Models\Employee;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Brian2694\Toastr\Facades\Toastr;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;

class LoginController extends Controller
{
    public function index(){

        return view('login.index');
    }

    public function first(){

        return redirect('/login');
    }
 
    public function verify(Request $request){


      $request->validate([
         'email' => 'required | min:10 | max:50 | email',
         'password' => 'required | min:8 | max:20 | alpha_num',
         
     ]);

     $userInfo = User::where('email','=', $request->email)->first();

     if(!$userInfo){
         return back()->with('fail','We do not recognize your email address');
     }else{
         //check password
         if(Hash::check($request->password, $userInfo->password))
         {
            $data['type'] = $userInfo->type;
            $data['id'] = $userInfo->id;
            $message = "Logged in succesfull";
            return response()->json([$data,$message],200);

         }
         else{
             $message = "Incorrect Password";
             return response()->json([$message],200);
         }
     }
   
   }
    }


