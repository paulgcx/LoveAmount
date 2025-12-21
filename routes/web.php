<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoveCounterController;
use App\Http\Controllers\TiempoJuntosController;

// MAIN RUTAS --------------------------------------------------------------
Route::get('/', function() {
    return view('fin');
});
//Route::get('/', [LoveCounterController::class, 'index'])->name('love.index');
Route::get('/tiempo-juntos', [TiempoJuntosController::class, 'index'])->name('tiempo.juntos');

// INCREMENTOS -------------------------------------------------------------
Route::post('/increment/paul', [LoveCounterController::class, 'incrementPaul']);
Route::post('/increment/vic', [LoveCounterController::class, 'incrementVic']);
Route::get('/api/counts', [LoveCounterController::class, 'getCurrentCounts']);