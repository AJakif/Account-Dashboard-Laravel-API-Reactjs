<?php

namespace App\Http\Controllers\account;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\coupon;
use App\Models\cart;
use App\Models\User;

class CouponController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = ['LoggedUserInfo'=>user::where('id','=', session('LoggedUser'))->first()];
        $coupon=Coupon::orderBy('id','DESC')->paginate('10');
        return response()->json(['data'=>$data,'coupon'=>$coupon],200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $data = ['LoggedUserInfo'=>user::where('id','=', session('LoggedUser'))->first()];
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
        $this->validate($request,[
            'code'=>'unique:coupons|string|required',
            'type'=>'required|in:fixed,percent',
            'value'=>'required|numeric',
            'status'=>'required|in:active,inactive'
        ]);
        $data=$request->all();
        $status=Coupon::create($data);
        if($status){
            $message = "Coupon Succesfully added";
            return response()->json([$message,'status'=>$status],200);
        }
        else{
            $message = "Error try again";
            return response()->json([$message,'status'=>$status],200);
        }
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
        $coupon=Coupon::find($id);
        if($coupon){
            return response()->json([$data,'coupon'=>$coupon],200);
        }
        else{
            $message = "Coupon not found";
            return response()->json([$data,$message],200);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update($id, Request $request)
    {
        $coupon=Coupon::find($id);
        $this->validate($request,[
            'code'=>'string|required',
            'type'=>'required|in:fixed,percent',
            'value'=>'required|numeric',
            'status'=>'required|in:active,inactive'
        ]);
        $data=$request->all();
        
        $status=$coupon->fill($data)->save();
        if($status){
            $message = "Coupon Succesfully Updated";
            return response()->json([$status,$message],200);
        }
        else{
            $message = "Coupon not found";
            return response()->json([$status,$message],200);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $coupon=Coupon::find($id);
        if($coupon){
            $status=$coupon->delete();
            if($status){
                $message = "Coupon Succesfully Deleted";
            return response()->json([$status,$message],200);
            }
            else{
                $message = "Error, please try again";
            return response()->json([$status,$message],200);
            }
        }
        else{
            $message = "Coupon not found";
            return response()->json([$message],200);
        }
    }

    public function couponStore(Request $request){
        // return $request->all();
        $coupon=Coupon::where('code',$request->code)->first();
        // dd($coupon);
        if(!$coupon){
            $message = "Invald Coupon Code";
            return response()->json([$message],200);
        }
        if($coupon){
            $total_price=Cart::where('user_id',user::where('id','=', session('LoggedUser')))->where('order_id',null)->sum('price');
            // dd($total_price);
            session()->put('coupon',[
                'id'=>$coupon->id,
                'code'=>$coupon->code,
                'value'=>$coupon->discount($total_price)
            ]);
            $message = "Coupon Succesfully applied";
            return response()->json([$message],200);
        }
    }
}
