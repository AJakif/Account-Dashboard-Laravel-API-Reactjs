<?php

namespace App\Http\Controllers\employee;

use App\Models\Package;
use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade as PDF;
use App\Http\Controllers\Controller;

class PackageController extends Controller
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
        return view('employee.dashboard.package.createpackage');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $req)
    {
        $package = new package();
        $package->package_name = $req->package_name;
        $package->package_type = $req->package_type;
        $package->package_location = $req->package_location;
        $package->package_price = $req->package_price;
        $package->package_feature = $req->package_feature;
        $package->package_details = $req->package_details;
        $package->package_time_duration = $req->package_time_duration;
        $package->package_image = $req->package_image;
        if ($req->hasFile('package_image')) {
            $file = $req->file('package_image');
            $fileName =  $req->session()->get('username') . '.' .  $file->getClientOriginalExtension();
            if ($file->move('upload', $fileName)) {
                $package->package_image  = $fileName;
                $package->save();
            } else {
                return redirect('employee/dashboard');
            }
        }
        $package->save();

        return redirect('employee/dashboard');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Package  $package
     * @return \Illuminate\Http\Response
     */
    public function show(Package $package)
    {
        $packagelist = Package::all();
        return view('employee.dashboard.package.viewpackage')->with('packagelist',$packagelist);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Package  $package
     * @return \Illuminate\Http\Response
     */
    public function edit($p_id)
    {
        $package = Package::find($p_id);
        return view('employee.dashboard.package.editpackage')->with('package',$package);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Package  $package
     * @return \Illuminate\Http\Response
     */
    public function update(Request $req, $p_id)
    {
        $package = Package::find($p_id);
        $package->package_name = $req->package_name;
        $package->package_type = $req->package_type;
        $package->package_location = $req->package_location;
        $package->package_price = $req->package_price;
        $package->package_feature = $req->package_feature;
        $package->package_details = $req->package_details;
        $package->package_time_duration = $req->package_time_duration;
        $package->package_image = $req->package_image;
        if ($req->hasFile('package_image')) {
            $file = $req->file('package_image');
            $fileName =  $req->session()->get('username') . '.' .  $file->getClientOriginalExtension();
            if ($file->move('upload', $fileName)) {
                $package->package_image  = $fileName;
                $package->save();
            } else {
                return redirect('employee/dashboard/viewpackage');
            }
        }
        $package->save();

        return redirect('employee/dashboard/viewpackage');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Package  $package
     * @return \Illuminate\Http\Response
     */

    public function packageshow($p_id)
    {
        $package = Package::find($p_id);
        return view('employee.dashboard.package.details')->with('package',$package);
    }
    public function downloadPDF()
    {
        $packagelist = Package::all();
        $pdf = PDF::loadView('employee.dashboard.package.viewpackage',compact('packagelist'))->setOptions(['defaultFont' => 'sans-serif']);
       
       
      return $pdf->download('package.pdf');
    }
    public function destroy($p_id)
    {
        if(Package::destroy($p_id)){
            return redirect('employee/dashboard/viewpackage');
        } 
    }

}
