<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Vue-App</title>
</head>
<body>

    <div id="app">
        {{--<input type="text" v-model="coupon">--}}
        {{-- <input type="text" :value="coupon" @input="coupon = $event.target.value"> --}}
        <coupon v-model="coupon">
    </div>

    <script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.js"></script>
    <script src="/js/app.js"></script>
</body>
</html>