<?php

namespace App\Http\Controllers\account;

use App\Http\Controllers\Controller;
use App\Models\Settings;
use App\Models\User;
use Illuminate\Http\Request;

class SettingsController extends Controller
{
    public function settings(){
        $user = ['LoggedUserInfo'=>User::where('id','=', session('LoggedUser'))->first()];
        $data=Settings::first();
        return response()->json([$user,$data],200);
    }

    public function settingsUpdate(Request $request){
        // return $request->all();
        $this->validate($request,[
            'short_des'=>'required|string',
            'description'=>'required|string',
            'photo'=>'required',
            'logo'=>'required',
            'address'=>'required|string',
            'email'=>'required|email',
            'phone'=>'required|string',
        ]);
        $data=$request->all();
        // return $data;
        $settings=Settings::first();
        // return $settings;
        if ($request->hasFile('photo')) {
            $file = $request->file('photo');
            $fileName =  $settings->id . '.' .  $file->getClientOriginalExtension();
            //$request->photo->move(public_path('/upload/blog_image'), $fileName);
           if ($file->move(public_path('/upload/webphoto'), $fileName)) {
                $data['photo']= $fileName;
                $status=$settings->fill($data)->save();
               
            } 
           
        }
        if ($request->hasFile('logo')) {
            $file = $request->file('logo');
            $fileName =  $settings->id . '.' .  $file->getClientOriginalExtension();
            //$request->photo->move(public_path('/upload/blog_image'), $fileName);
           if ($file->move(public_path('/upload/weblogo'), $fileName)) {
                $data['logo']= $fileName;
                $status=$settings->fill($data)->save();
               
            } 
           
        }
        $status=$settings->fill($data)->save();
        if($status){
            $message = "Settings Succesfully Updated";
            return response()->json([$status,$message],200);
        }
        else{
            $message = "Error Please try again";
            return response()->json([$status,$message],200);
        }
    }
}
