<template>
  <img
    :id="itemProps.id"
    :src="itemProps.value"
    @mousedown="registerDraggable"
    class="draggable" />
</template>

<script>
import Draggable from '../services/behaviors/Draggable';

export default {
  name: 'DraggableImage',
  props: ['itemProps'],
  methods: {
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
