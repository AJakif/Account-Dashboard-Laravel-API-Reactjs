<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employeeattendance extends Model
{
    use HasFactory;

    public function user(){
        return $this->belongsTo(User::class,'employee_id','id');
    }
    public function absent(){
        return Employeeattendance::with(['user'])->where('attend_status','Absent');
    }
}
