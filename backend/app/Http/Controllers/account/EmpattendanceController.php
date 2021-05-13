<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Employeeattendance;
use App\Models\LeavePurpose;

class EmpattendanceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        
        $data = ['LoggedUserInfo'=>user::where('id','=', session('LoggedUser'))->first()];
        $data['alldata'] = Employeeattendance::select('date')->groupBy('date')->orderBy('id','DESC')->get();
        return response()->json([$data],200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $data = ['LoggedUserInfo'=>user::where('id','=', session('LoggedUser'))->first()];
        $data['employees'] = User::where('type','=' ,'employee')->orwhere('type','=' ,'guide')->get();
        $data['leavepurpose']=LeavePurpose::all();
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
        Employeeattendance::where('date',date('Y-m-d',strtotime($request->date)))->delete();
       $countemployee = count($request->employee_id);
       for($i=0; $i < $countemployee; $i++){
           $attend_status = 'attend_status'.$i;
           $attend = new Employeeattendance();
           $attend->date = date('Y-m-d',strtotime($request->date));
           $attend->employee_id = $request->employee_id[$i];
           $attend->attend_status = $request->$attend_status;
           $attend -> save();
       }
       $message = "employee attendance given succesfully";
            return response()->json([$attend,$message],200);
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
    public function edit($date)
    {
        $data = ['LoggedUserInfo'=>user::where('id','=', session('LoggedUser'))->first()];
        $data['employees'] = User::where('type','=' ,'employee')->orwhere('type','=' ,'guide')->get();
        $data['editdata'] = Employeeattendance::where('date',$date)->get();
        return response()->json([$data],200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        Employeeattendance::where('date',date('Y-m-d',strtotime($request->date)))->delete();
        $countemployee = count($request->employee_id);
        for($i=0; $i < $countemployee; $i++){
            $attend_status = 'attend_status'.$i;
            $attend = new Employeeattendance();
            $attend->date = date('Y-m-d',strtotime($request->date));
            $attend->employee_id = $request->employee_id[$i];
            $attend->attend_status = $request->$attend_status;
            $attend -> save();
        }
        $message = "employee attendance Updated succesfully";
            return response()->json([$attend,$message],200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function details($date)
    {
        $data = ['LoggedUserInfo'=>user::where('id','=', session('LoggedUser'))->first()];
        $data['alldata'] = Employeeattendance::where('date',$date)->get();
        return response()->json([$data],200);
    }
}
