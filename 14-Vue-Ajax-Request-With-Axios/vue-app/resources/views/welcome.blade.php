<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel</title>
        <script src="https://vuejs.org/js/vue.js"></script>
        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
        
    </head>        
    <body>
        <div id="app">
            <ul>
            <li v-for="skill in skills">@{{ skill }}</li> <!-- @ This is to allow vue to parse {{}} -->
            <li v-for="skill in skills" v-text="skill"></li> <!-- preffereed way of dealing with this -->
            </ul>
        </div>
        <script src="/js/app.js"></script>
    </body>
</html>
