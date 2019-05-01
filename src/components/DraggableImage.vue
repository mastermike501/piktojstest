<template>
  <img
    :id="itemProps.id"
    :src="itemProps.value"
    @click="selectItem"
    @mousedown="registerDraggable"
    class="draggable" />
</template>

<script>
import Draggable from '../services/behaviors/Draggable';
import Selectable from '../services/behaviors/Selectable';

export default {
  name: 'DraggableImage',
  props: ['itemProps'],
  methods: {
    selectItem: function () {
      Selectable(this.itemProps).selectItem();
    },
    registerDraggable: function () {
      const el = document.getElementById(this.itemProps.id);
      Draggable(el);
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
