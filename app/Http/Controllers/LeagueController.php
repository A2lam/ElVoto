<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\League;

class LeagueController extends Controller
{
    // TODO : Address of deployed contract :  0x522933a04dBA4CE1AA28797Da60D7B283D651BfD

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('leagues.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|max:255',
        ]);

        $league = new League();
        $league->name = $validatedData['name'];

        //session()->flash('success', 'Trajet enregistré avec succès !');
        return redirect()->route('leagues.show', $league->name);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @param $leagueName
     * @return \Illuminate\Http\Response
     */
    public function show($leagueName)
    {
        return view('leagues.show', compact('leagueName'));
    }
}
