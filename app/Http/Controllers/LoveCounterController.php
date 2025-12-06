<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\DailyLoveCount;
use Illuminate\Http\Request;

class LoveCounterController extends Controller
{
    public function index() {
        $record = DailyLoveCount::forToday();
        $fecha_format = Carbon::parse($record->date)->locale('es')->isoFormat('D [de] MMMM [de] YYYY');

        return view('love', [
            'p_count' => $record->p_count,
            'v_count' => $record->v_count,
            'date' => $fecha_format
        ]);
    }

    public function incrementPaul() {
        $record = DailyLoveCount::forToday();
        $record->p_count += 1;
        $record->save();
        return response()->json(['p_count' => $record->p_count]);
    }

    public function incrementVic() {
        $record = DailyLoveCount::forToday();
        $record->v_count += 1;
        $record->save();
        return response()->json(['v_count' => $record->v_count]);
    }
}
