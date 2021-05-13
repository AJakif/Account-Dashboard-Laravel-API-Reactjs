<?php

namespace App\Http\Controllers\employee;
use App\Models\Booking;
use App\Models\Package;
use App\Models\Customer;
use App\Models\Tourguide;
use Illuminate\Http\Request;
use App\Exports\BookingsExport;
use Brian2694\Toastr\Facades\Toastr;
use App\Http\Controllers\Controller;

use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Excel;

class BookingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {   $packagelist = Package::paginate(5);
        return view('employee.dashboard.booking.indexbooking')->with('packagelist',$packagelist);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create($p_id)
    {   $customers =  DB::table('customers')->get(); 
        $package = Package::find($p_id);
        
        
        return view('employee.dashboard.booking.createbooking')->with('package',$package)->with('customers',$customers);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $req)
    {
        $booking = new booking();
        $booking->pro_id = $req->pro_id;
        $booking->travel_date_start = $req->travel_date_start;
        $booking->travel_date_end = $req->travel_date_end;
        $booking->person = $req->person;
        $booking->username = $req->username;
        $booking->email = $req->email;
        $booking->status = 0;
        $booking->tour_username = null;
        $booking->save();
        return redirect('/dashboard');
        Toastr::success('New Booking create','Success');
   ;
    }
 
   public function storebooking($b_id, Request $req)
   {
    $booking = booking::find($b_id);
     
      
       $booking->status= 1;
       $booking->status = $req->status;
       $booking->save();
       Toastr::success('Confirm Booking succeessfully','Success');
       return redirect('/dashboard/viewbooking')->with("Confirm_Booking",'Confirm Booking succeessfully');
  
   }
   
   public function tourguide($b_id, Request $req)
   {
    $booking = booking::find($b_id);
     
      
       $booking->tour_username= $req->tour_username;
      
       $booking->save();
       Toastr::success('Tour Guide add succeessfully','Success');
       return redirect('/dashboard/viewbooking');
  
   }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Booking  $booking
     * @return \Illuminate\Http\Response
     */
    public function show(Booking $booking)
    {  

        $tourguides = Tourguide::all();
        $bookinglist =  DB::table('bookings')
        ->join('packages','packages.p_id','=','bookings.pro_id')
        ->get();
        $packages= Package::get();

       $data =['packages' => $packages,
    'bookinglist' =>  $bookinglist,

    ];
        return view('employee.dashboard.booking.viewbooking')->with('data',$data)->with('tourguides',$tourguides);
    }

public function search(Request $req)
{
    $search = $req->get('search');
    $tourguides = Tourguide::all();
    $bookinglist =  DB::table('bookings')->where('username' , 'like' , '%'.$search.'%')
    ->join('packages','packages.p_id','=','bookings.pro_id')
    ->get();
    $packages= Package::get();

   $data =['packages' => $packages,
'bookinglist' =>  $bookinglist,
];
return view('employee.dashboard.booking.viewbooking')->with('data',$data)->with('tourguides',$tourguides);
}

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Booking  $booking
     * @return \Illuminate\Http\Response
     */
    public function edit(Booking $booking)
    {
        //
    }
    public function export(Excel $execl)
    {   Toastr::success('Excel Downloading','Success');
        return $execl->download(new BookingsExport,'bookings.xlsx');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Booking  $booking
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Booking $booking)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Booking  $booking
     * @return \Illuminate\Http\Response
     */
    public function destroy($b_id)
    {
        Booking::destroy($b_id);
        Toastr::error('Booking Deleted','Deleted');
        return redirect('/dashboard/viewbooking');
    }
}
