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
    // upon page unload, save items in store to local storage
    window.onbeforeunload = function () {
      Store.saveItemsToLocalStorage();
    };

    // on delete button press, remove selected item from store
    document.body.onkeydown = function (event) {
      if (event.keyCode === 46) {
        Store.deleteItem();
      }
    };

    // upon page load, retrieve items from local storage
    Store.retrieveItemsFromLocalStorage();
  }
}
</script>