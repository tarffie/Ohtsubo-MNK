<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CalculationsController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/calculations/{name}', [CalculationsController::class, 'greetings']);
