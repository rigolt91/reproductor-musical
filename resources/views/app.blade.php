<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="Laboratorio de análisis clínicos y bacteriológicos" />

        <title inertia>{{ config('app.name', 'BC Lab') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
        <link rel="shortcut icon" type="image/png" href="{{ asset('favicon.png') }}">
        <link rel="shortcut icon" sizes="192x192" href="{{ asset('favicon.png') }}">

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
        <script src="{{ asset('messages.js') }}"></script>
    </head>
    <body class="font-sans antialiased">
        @inertia
        <script src="https://open.spotify.com/embed/iframe-api/v1" async></script>
    </body>
</html>
