<?php

namespace App\Http\Controllers;

use App\Models\ExtraCost;
use App\Models\User;
use Illuminate\Http\Request;

class ExtracostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = ['LoggedUserInfo'=>User::where('id','=', session('LoggedUser'))->first()];
        $data['alldata'] = ExtraCost::orderBy('id','desc')->get();
        return response()->json([$data],200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $data = ['LoggedUserInfo'=>User::where('id','=', session('LoggedUser'))->first()];
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
        $cost= new ExtraCost();
        $cost->date = date('Y-m-d',strtotime($request->date));
        $cost->amount = $request->amount;
        if($request->file('image')){
            $file = $request->file('image');
            $filename = date('YmdHi').'.'.$file->getClientOriginalExtension();
            $file->move(public_path('upload/cost_image'),$filename);
            $cost['image'] = $filename;
        }
        $cost->description = $request->description;
        $cost->save();

        $message = "Extra cost added";
        return response()->json([$message,$cost],200);
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
        $data = ['LoggedUserInfo'=>User::where('id','=', session('LoggedUser'))->first()];
        $data['editdata'] = ExtraCost::find($id);
        return response()->json([$data],200);
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
        $cost= ExtraCost::find($id);
        $cost->date = date('Y-m-d',strtotime($request->date));
        $cost->amount = $request->amount;
        if($request->file('image')){
            $file = $request->file('image');
            $filename = date('YmdHi').'.'.$file->getClientOriginalExtension();
            $file->move(public_path('upload/cost_image'),$filename);
            $cost['image'] = $filename;
        }
        $cost->description = $request->description;
        $cost->save();

        $message = "Extra cost Updated";
        return response()->json([$message,$cost],200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
