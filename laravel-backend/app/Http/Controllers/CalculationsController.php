<?php

namespace App\Http\Controllers;

//use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class CalculationsController extends Controller
{

    /**
     * @param $request: Request
     * @return greeting message
     */

    public function greetings($request): JsonResponse
    {
        return response()->json('hello ' . $request);
    }
}
