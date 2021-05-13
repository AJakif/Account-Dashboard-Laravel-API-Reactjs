<?php

namespace App\Http\Controllers\account;

use App\Http\Controllers\Controller;
use App\Models\EmployeeSalary;
use App\Models\ExtraCost;
use App\Models\Order;
use App\Models\User;
use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade as PDF;
use Illuminate\Support\Facades\DB;

class ProfitController extends Controller
{
    public function show(){
        $data = ['LoggedUserInfo'=>User::where('id','=', session('LoggedUser'))->first()];
        return response()->json([$data],200);
    }


    public function profit(Request $request){
        
        $start_date = date('Y-m',strtotime($request->start_date));
        $end_date = date('Y-m',strtotime($request->end_date));
        $sdate = date('Y-m-d',strtotime($request->start_date));
        $edate = date('Y-m-d',strtotime($request->end_date));
        $package_sell=Order::whereBetween('date',[$start_date, $end_date])->sum('amount');
        //dd($package_sell);
        $extra_cost=ExtraCost::whereBetween('date',[$start_date, $end_date])->sum('amount');
        $emp_salary =EmployeeSalary::whereBetween('date',[$start_date, $end_date])->sum('amount');
        $total_cost = $extra_cost + $emp_salary;
        $profit = $package_sell-$total_cost;

        $data = ['LoggedUserInfo'=>User::where('id','=', session('LoggedUser'))->first()];

        //dd('ok');
        return view('account.dashboard.profit.show',$data)
        ->with('package_sell',$package_sell)->with('profit',$profit)
        ->with('extra_cost',$extra_cost)->with('emp_salary',$emp_salary)->with('total_cost',$total_cost)
        ->with('start_date',$start_date)
        ->with('end_date',$end_date)
        ->with('sdate',$sdate)
        ->with('edate',$edate);
    }


    public function details(Request $request){
        $data['sdate'] = date('Y-m',strtotime($request->start_date));
        $data['edate'] = date('Y-m',strtotime($request->end_date));
        $data['start_date'] = date('Y-m-d',strtotime($request->start_date));
        $data['end_date'] = date('Y-m-d',strtotime($request->end_date));

        $pdf = PDF::loadView('account.dashboard.profit.profit-pdf',$data);
        return $pdf->download('Profit.pdf');
    }
}
