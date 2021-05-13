<?php

namespace App\Imports;

use App\Models\Customer;
use Maatwebsite\Excel\Concerns\SkipsOnError;
use Maatwebsite\Excel\Concerns\SkipsOnFailure;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithValidation;
use Throwable;

class CustomersExport implements 
    ToModel,
    WithHeadingRow,
    SkipsOnError,
    WithValidation
    
    {
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        return new Customer([
           
            'fullname' => $row['fullname'],
            'username' => $row['username'],
            'email'    => $row['email'],
            'password' => $row['password'],
            'phone'    => $row['phone'],
            'address'   => $row['address' ],
            'gender'    => $row['gender' ]

        ]);
    }
    public function onError(Throwable $e)
    {
        
    }
    public function rules():array{

        return[
            '*.email' =>['email','unique:customers,email']
        ];
    }
 

}
