<template>
  <div id="app">
    <message>Hello There!</message>
  </div>
</template>

<script>
import message from "./components/message.vue";

export default {
  name: 'app',
  components: {message},
  data () {
    return {
    }
  }
}
</script>

<style>

</style>
