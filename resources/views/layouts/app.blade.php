<?php
/**
 * Created by PhpStorm.
 * User: a2
 * Date: 21/01/20
 * Time: 22:37
 */
?>

<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <!-- App title -->
        <title>El-Voto</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

        <!-- Scripts -->
        <script src="{{ asset('js/app.js') }}" defer></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

        <!-- Styles -->
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">

        <!-- Additional headers -->
        @yield('headers')
    </head>

    <body>
        <!-- Navigation -->
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div class="container">
                <a class="navbar-brand" href="{{ url('/') }}"><h3 class="home-title">El-Voto</h3></a>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto">
                        @yield('menu')
                        <li class="nav-item">
                            <a class="nav-link" href="{{ route('leagues.create') }}">Démarrer une nouvelle ligue</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Voir les résultats des ligues</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <!-- Main content -->
        <div class="main-content">
            @yield('content')
        </div>
        <!-- Footer -->
        {{--<footer class="py-3 bg-dark">
            <div class="container">
                <p class="m-0 text-center text-white">Copyright &copy; El-Voto {{ now()->year }}</p>
            </div>
        </footer>--}}
        @yield('scripts')
    </body>
</html>
