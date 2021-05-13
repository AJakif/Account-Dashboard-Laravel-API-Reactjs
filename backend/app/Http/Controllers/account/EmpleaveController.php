<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\LeavePurpose;
use App\Models\EmployeeLeave;
use App\Models\User;

class EmpleaveController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = ['LoggedUserInfo'=>user::where('id','=', session('LoggedUser'))->first()];
        $data['alldata'] = EmployeeLeave::orderBy('id','desc')->get();
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
        $data['leave_purpose'] = LeavePurpose::all();
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
            if($request->leave_purpose_id == "0"){
                $leavepurpose = new LeavePurpose();
                $leavepurpose ->name = $request->name;
                $leavepurpose->save();
                $leave_purpose_id= $leavepurpose->id;

            }else{
                $leave_purpose_id=$request-> leave_purpose_id;
            }

                $employee_leave = new EmployeeLeave();
                $employee_leave ->employee_id = $request->employee_id;
                $employee_leave ->start_date = date('Y-m-d',strtotime($request->start_date));
                $employee_leave ->end_date = date('Y-m-d',strtotime($request->end_date));
                $employee_leave ->leave_purpose_id = $leave_purpose_id;
                $employee_leave ->status = "accepted";
                $employee_leave -> save();

                $message = "employee leave stored succesfully";
            return response()->json([$leavepurpose,$employee_leave,$message],200);

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
        $data['editdata']=EmployeeLeave::find($id);
        $data['employees'] = User::where('type','=' ,'employee')->orwhere('type','=' ,'guide')->get();
        $data['leave_purpose'] = LeavePurpose::all();
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
        if($request->leave_purpose_id == "0"){
            $leavepurpose = new LeavePurpose();
            $leavepurpose ->name = $request->name;
            $leavepurpose->save();
            $leave_purpose_id= $leavepurpose->id;

        }else{
            $leave_purpose_id=$request-> leave_purpose_id;
        }

            $employee_leave = EmployeeLeave::find($id);
            $employee_leave ->employee_id = $request->employee_id;
            $employee_leave ->start_date = date('Y-m-d',strtotime($request->start_date));
            $employee_leave ->end_date = date('Y-m-d',strtotime($request->end_date));
            $employee_leave ->leave_purpose_id = $leave_purpose_id;
            $employee_leave -> save();

            $message = "employee leave Updated succesfully";
            return response()->json([$leavepurpose,$employee_leave,$message],200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    
}
