<template>
  <div id="app">
    <Sidepane />
    <Canvas />
  </div>
</template>

<script>
import Store from './services/store/Store'
import Sidepane from './components/Sidepane.vue'
import Canvas from './components/Canvas.vue'

export default {
  name: 'app',
  components: {
    Sidepane,
    Canvas
  },
  mounted() {
    document.body.onkeydown = function (event) {
      if (event.keyCode === 46 || event.keyCode === 8) {
        Store.deleteItem();
      }
    };
  }
}
</script>