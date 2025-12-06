<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DailyLoveCount extends Model
{
    use HasFactory;

    protected $fillable = ['date', 'p_count', 'v_count'];

    public static function forToday() {
        $today = Carbon::today()->toDateString();
        $date = Carbon::parse($today)->locale('es')->isoFormat('D [de] MMMM [de] YYYY');

        return static::firstOrCreate(
            ['date' => $date],
            ['p_count' => 0, 'v_count' => 0]
        );
    }
}
