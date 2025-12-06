<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoveCounterController;

// MAIN RUTAS --------------------------------------------------------------
Route::get('/', [LoveCounterController::class, 'index']);
Route::get('/tiempo-juntos', function() {
    return "Tiempo juntos";
})->name('tiempo.juntos');

// INCREMENTOS -------------------------------------------------------------
Route::post('/increment/paul', [LoveCounterController::class, 'incrementPaul']);
Route::post('/increment/vic', [LoveCounterController::class, 'incrementVic']);