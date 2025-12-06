<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DailyLoveCount extends Model
{
    use HasFactory;

    protected $fillable = ['date', 'p_count', 'v_count'];
    protected $casts = [
        'date' => 'date:Y-m-d',
    ];

    public static function forToday() {
        $today = Carbon::today();

        return static::firstOrCreate(
            ['date' => $today],
            ['p_count' => 0, 'v_count' => 0]
        );
    }
}
