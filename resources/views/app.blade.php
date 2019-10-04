<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Vue Playlist</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

        <!-- Style -->
        <link href="{{ url('/css/app.css') }}" rel="stylesheet">
    </head>
    <body>
        <div id="app" class="content">
            <playlist></playlist>
        </div>
 
        <script type="text/javascript" src="{{ url('/js/app.js') }}"></script>
    </body>
</html>
