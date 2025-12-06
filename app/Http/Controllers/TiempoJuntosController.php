<?php

namespace App\Http\Controllers;
use Carbon\Carbon;
use Illuminate\Http\Request;

class TiempoJuntosController extends Controller
{
    private const START_DATE = '2023-09-08';

    public function index() {
        $startDate = Carbon::parse(self::START_DATE);
        $startDateForJs = $startDate->toIso8601String();
        return view('tiempo-juntos', compact('startDateForJs'));
    }
}
