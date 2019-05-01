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
  methods: {
    selectItem: function () {
      Selectable(this.item).selectItem();
    },
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
