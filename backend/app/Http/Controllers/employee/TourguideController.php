<?php

namespace App\Http\Controllers\employee;

use App\Models\Tourguide;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class TourguideController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('employee.dashboard.tourguide.addtourguide');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $req)
    {
        $tourguide = new Tourguide();
        $tourguide->fullname = $req->fullname;
        $tourguide->username = $req->username;
        $tourguide->email = $req->email;
        $tourguide->phone = $req->phone;
        $tourguide->password = $req->password;
        $tourguide->save();

        return redirect('/dashboard');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Tourguide  $tourguide
     * @return \Illuminate\Http\Response
     */
    public function show(Tourguide $tourguide)
    {
        $tourguidelist = Tourguide::paginate(5);
        return view('employee.dashboard.tourguide.viewtourguide')->with('tourguidelist',$tourguidelist);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Tourguide  $tourguide
     * @return \Illuminate\Http\Response
     */
    public function edit(Tourguide $tourguide)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Tourguide  $tourguide
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Tourguide $tourguide)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Tourguide  $tourguide
     * @return \Illuminate\Http\Response
     */
    public function destroy(Tourguide $tourguide)
    {
        //
    }
}
