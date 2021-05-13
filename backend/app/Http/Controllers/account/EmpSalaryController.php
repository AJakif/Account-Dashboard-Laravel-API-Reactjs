<?php

namespace App\Http\Controllers;

use App\Models\EmployeeSalaryLog;
use Illuminate\Http\Request;
use App\Models\User;
use Barryvdh\DomPDF\Facade as PDF;
use phpDocumentor\Reflection\Types\Float_;

class EmpSalaryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = ['LoggedUserInfo'=>user::where('id','=', session('LoggedUser'))->first()];
        $data['alldata'] = User::where('type','=' ,'employee')->orwhere('type','=' ,'guide')->get();
        return response()->json([$data],200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $data = ['LoggedUserInfo'=>user::where('id','=', session('LoggedUser'))->first()];
        $data['details'] = User::find($id);
        $data['SalaryLog']=EmployeeSalaryLog::where('employee_id',$data['details']->id)->get();
        //dd($data['SalaryLog']->toArray());
        return response()->json([$data],200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function increment($id)
    {
        $data = ['LoggedUserInfo'=>user::where('id','=', session('LoggedUser'))->first()];
        $data['user'] = User::find($id);
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
        $user = User::find($id);
        $previous_salary = $user->salary;
        $increment= (float)$request->increment_salary;
        $present_salary = (float)$previous_salary + $increment;
        $user->salary = $present_salary;
        $user->save();
        $salaryData = new EmployeeSalaryLog();
        $salaryData->employee_id = $id;
        $salaryData->previous_salary = $previous_salary;
        $salaryData->present_salary = $present_salary;
        $salaryData->increment_salary = $increment;
        $salaryData->effected_date =date('Y-m-d',strtotime($request->effected_date)) ;
        $salaryData->save();

        $message = "Employee salary Updated succesfully";
        return response()->json([$salaryData,$user,$message],200);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function details($id)
    {
        $data['details'] = User::find($id);
        $data['SalaryLog']=EmployeeSalaryLog::where('employee_id',$data['details']->id)->get();
        $pdf = PDF::loadView('account.dashboard.employeesalary.details-pdf',$data);
        return $pdf->download('salary.pdf');
    }
}
