<?php

namespace App\Http\Controllers\employee;

use App\Imports\CustomersExport;
use App\Models\Employee;
use App\Models\Customer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Facades\Excel;
use App\Http\Controllers\Controller;

class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $req)
    {
        //
    }
    public function confirmstatus($id, Request $req)
    {
     $customer = Customer::find($id);
      
       
        $customer->status= 1;
        $customer->status = $req->status;
        $customer->save();
     
        return redirect('/dashboard/view')->with("Confirm_status",'Confirm status succeessfully');
   
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $req)
    {
        
        return view('employee.dashboard.customer.adduser');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $req)
    {
        $customer = new Customer();
        $customer->fullname = $req->fullname;
        $customer->username = $req->username;
        $customer->email = $req->email;
        $customer->address = $req->address;
        $customer->phone = $req->phone;
        $customer->password = $req->password;
        $customer->gender = $req->gender;
        $customer->save();

        return redirect('/dashboard');

    }
 

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function show(Request $req)
    {
        $customerlist = Customer::paginate(5);
        return view('employee.dashboard.customer.viewuser')->with('customerlist',$customerlist);
    }


    public function search(Request $req)
    {
        $search = $req->get('search');
        $customerlist = DB::table('customers')->where('username' , 'like' , '%'.$search.'%')->paginate(5);
        return view('employee.dashboard.customer.viewuser')->with('customerlist',$customerlist);
    }
    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $customer = Customer::find($id);
        return view('employee.dashboard.customer.edituser')->with('customer',$customer);
    }
    public function import(Request $req)
    {
        $file = $req->file('file')->store('import');
        Excel::import(new CustomersExport, $file);
        return back()->withStatus('Excel File import successfully');
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function update(Request $req, $id)
    {
        $customer = Customer::find($id);
        $customer->fullname = $req->fullname;
        $customer->email = $req->email;
        $customer->address = $req->address;
        $customer->phone = $req->phone;
        $customer->password = $req->password;
        $customer->gender = $req->gender;
        $customer->save();

        return redirect('/dashboard/view');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if(Customer::destroy($id)){
            return redirect('/dashboard/view');
        } 
    }
}
