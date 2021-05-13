<?php

namespace App\Http\Controllers\admin;

use Illuminate\Http\Request;
use App\Models\User;
use App\Http\Controllers\Controller;

class AdminController extends Controller
{
    function admindashboard(){
        $data = ['LoggedUserInfo'=>user::where('id','=', session('LoggedUser'))->first()];
        return view('admin.dashboard', $data);
    }
    function adminsettings(){
        $data = ['LoggedUserInfo'=>user::where('id','=', session('LoggedUser'))->first()];
        return view('admin.settings', $data);
    }

    function adminprofile(){
        $data = ['LoggedUserInfo'=>user::where('id','=', session('LoggedUser'))->first()];
        return view('admin.profile', $data);
    }
}
