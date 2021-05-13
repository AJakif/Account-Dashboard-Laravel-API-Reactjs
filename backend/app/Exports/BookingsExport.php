<?php

namespace App\Exports;

use App\Models\Booking;

use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Illuminate\Contracts\Support\Responsable;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;

class BookingsExport implements FromCollection,
    Responsable,
    ShouldAutoSize,
    WithHeadings
    { 
    use Exportable;

    private $filename ="bookings.xlsx";
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
       
        return Booking::all();
    }
public function headings(): array
{
    return [
        '#',
        'Package ID',
        'Travel Date Start',
        'Travel Date End',
        'Total Person',
        'Customer Name',
        'Email',
        'Booking Confirmation',
        'Tour Guide',
        'Created_at',
        'Updated_at'


    ];
}

}
