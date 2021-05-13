<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class Admin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        
    if( session('Loggedtype') == 'admin')
    {
        return $next($request);
    }
    else{
        return redirect()->back()->with('fail','You do not have any permission to access Admin pages');
    }
    
    }
}
