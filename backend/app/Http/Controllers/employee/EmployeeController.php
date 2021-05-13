<?php

namespace App\Http\Controllers\employee;
use App\Models\User;
use App\Models\Employee;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
     
        
        //return view('dashboard.profile',compact('employee'))
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function show(Employee $employee)
    {
        //
    }
    public function dashboard(Request $req)
    {

      /*   $count  =DB::table('customers')->count(); */
       /*  $employee = User::where('username',$req->session()->get('username'))->first(); */
        return view('employee.dashboard.index');/* ->with('employee',$employee); */
    }
    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function edit( $id ,Request $req)
    {
       $employee = User::find($id);
       return view('employee.dashboard.profile.editprofile')->with('employee', $employee);
    }
    
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function update($id, Request $req)
    {

        $employee = User::find($id);   
            $employee->fullname     = $req->fullname;
            $employee->email        = $req->email;
            $employee->phone        = $req->phone;
            $employee->address      = $req->address;
            $employee->facebook     = $req->facebook;
           if ($req->hasFile('myfile')) {
                $file = $req->file('myfile');
                $fileName =  $req->session()->get('username') . '.' .  $file->getClientOriginalExtension();
                if ($file->move('uploads', $fileName)) {
                    $employee->profile_img  = $fileName;
                    $employee->save();
                   
                } else {
                 
                    return redirect('/dashboard/profile');
                }

               
            }    
            $employee->save();
    return redirect('/employee/dashboard/profile');
    
   
      
            

}

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function destroy(Employee $employee)
    {
        //
    }
    public function profile(Request $req){
        $employee = User::where('username',$req->session()->get('username'))->first();
        return view('employee.dashboard.profile.profile')->with('employee',$employee);
    }
}
