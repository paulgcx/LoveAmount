<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoveCounterController;

Route::get('/', [LoveCounterController::class, 'index']);

// INCREMENTOS -------------------------------------------------------------
Route::post('/increment/paul', [LoveCounterController::class, 'incrementPaul']);
Route::post('/increment/vic', [LoveCounterController::class, 'incrementVic']);