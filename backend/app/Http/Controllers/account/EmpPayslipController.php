<?php

namespace App\Http\Controllers\account;

use App\Http\Controllers\Controller;
use App\Models\Employeeattendance;
use App\Models\User;
use Barryvdh\DomPDF\Facade as PDF;
use CreateEmployeeattendancesTable;
use Illuminate\Http\Request;

class EmpPayslipController extends Controller
{
    public function index(){
        $data = ['LoggedUserInfo'=>User::where('id','=', session('LoggedUser'))->first()];
        return response()->json([$data],200);
    }
    public function getSalary(Request $request){
        //dd('ok');
       // $edate= $request->date;
            
            $date = date('Y-m', strtotime($request->date));

            if($date !=''){
                $where[] = ['date','like',$date.'%'];
            }
            $data = ['LoggedUserInfo'=>user::where('id','=', session('LoggedUser'))->first()];
            $edata = Employeeattendance::select('employee_id')->groupBy('employee_id')->where($where)->get();
                   
            return response()->json(['editdata'=>$edata,'where'=>$where,'date'=>$date,$data]);
            
            
                
            //dd('ok');
            
        
    }
    public function payslip(Request $request,$employee_id){

        $id = Employeeattendance::where('employee_id',$employee_id)->first();
        $date = date('Y-m',strtotime($id->date));
        if($date !=''){
            $where[] = ['date','like',$date.'%'];
        }
        $data['totalattend']=Employeeattendance::with(['user'])->where($where)
        ->where('employee_id',$id->employee_id)->get();
               
        $data['details'] = User::find($employee_id);
        $pdf = PDF::loadView('account.dashboard.payroll.payroll-pdf',$data);
        return $pdf->download('Payroll.pdf');

    }
}
