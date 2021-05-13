<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class Guide
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
        if( session('Loggedtype') == 'guide')
    {
        return $next($request);
    }
    else{
        return redirect()->back()->with('fail','You do not have any permission to access Guide pages');
    }
    }
}
