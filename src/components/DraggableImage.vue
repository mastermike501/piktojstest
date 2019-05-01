<template>
  <img
    :id="item.id"
    :src="item.value"
    @click="selectItem"
    @mousedown="registerDraggable"
    class="draggable" />
</template>

<script>
import Store from '../services/store/Store';
import Draggable from '../services/behaviors/Draggable';
import Selectable from '../services/behaviors/Selectable';

export default {
  name: 'DraggableImage',
  props: ['item'],
  mounted() {
    // set image location based on refreshed data
    const el = document.getElementById(this.item.id);
    el.style.top = this.item.x;
    el.style.left = this.item.y;
  },
  methods: {
    // refer to Selectable.js to view delegated code
    selectItem: function () {
      Selectable(this.item).selectItem();
    },

    // based on x and y values after drop,
    // update the store with the latest value
    registerDraggable: function () {
      const item = this.item;
      Draggable(item, function (x, y) {
        Store.updateItem(
          Object.assign({}, item, {x, y})
        );
      });
    }
  }
}
</script>

<style scoped>
.draggable {
  position: absolute;
  cursor: move;
}
</style>
