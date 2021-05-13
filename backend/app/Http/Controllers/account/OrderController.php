<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\User;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function index()
    {
        $data = ['LoggedUserInfo'=>User::where('id','=', session('LoggedUser'))->first()];
        $data['alldata'] = Order::orderBy('id','desc')->get();
        return response()->json([$data],200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $data = ['LoggedUserInfo'=>User::where('id','=', session('LoggedUser'))->first()];
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
        $order= new Order();
        $order->date = date('Y-m-d',strtotime($request->date));
        $order->amount = $request->amount;
        $order->save();

        $message = "Order added";
        return response()->json([$message,$order],200);
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
        $data = ['LoggedUserInfo'=>User::where('id','=', session('LoggedUser'))->first()];
        $data['editdata'] = Order::find($id);
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
        $cost= Order::find($id);
        $cost->date = date('Y-m-d',strtotime($request->date));
        $cost->amount = $request->amount;
        
        $cost->save();

        $message = "order cost updated";
        return response()->json([$message,$cost],200);
    }
    public function destroy($id)
    {
        //
    }
}
