<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('home');
});

Route::get('/league/create', 'LeagueController@create')->name('leagues.create');
Route::post('/league/store', 'LeagueController@store')->name('leagues.store');
Route::get('/league/show/{leagueName}', 'LeagueController@show')->name('leagues.show');
