<?php

namespace App\Http\Controllers\tourguide;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class guideController extends Controller
{
    function guidedashboard(){
        $data = ['LoggedUserInfo'=>user::where('id','=', session('LoggedUser'))->first()];
        return view('Tourguide.dashboard', $data);
    }
}
