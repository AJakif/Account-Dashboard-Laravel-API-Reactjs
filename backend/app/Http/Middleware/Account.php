<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class Account
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
        if( session('Loggedtype') == 'account')
        {
            return $next($request);
        }
        else{
            return redirect()->back()->with('fail','You do not have any permission to access Account pages');
        }
    }
}
