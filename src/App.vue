<template>
  <div id="app">
    <Sidepane />
    <Canvas />
  </div>
</template>

<script>
import Sidepane from './components/Sidepane.vue'
import Canvas from './components/Canvas.vue'

export default {
  name: 'app',
  components: {
    Sidepane,
    Canvas
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
