<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EmployeeSalary extends Model
{
    use HasFactory;
    public function user(){
        return $this->belongsTo(user::class,'employee_id','id');
    }
}
