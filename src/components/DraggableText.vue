<template>
  <div
    class="draggable"
    v-bind:id="itemProps.id"
    @mousedown="registerDraggable"
    @dblclick="setEditMode">
    <input
      type="text"
      v-bind:id="'textbox' + itemProps.id"
      v-if="isEditMode"
      v-bind:value="itemProps.value"
      @blur="resetEditMode">
    <span v-else>
      {{ itemProps.value }}
    </span>
  </div>
</template>

<script>
import Draggable from '../services/behaviors/Draggable';
import { setTimeout } from 'timers';

export default {
  name: 'DraggableText',
  props: ['itemProps'],
  data() {
    return {
      isEditMode: false
    };
  },
  methods: {
    registerDraggable: function () {
      const el = document.getElementById(this.itemProps.id);
      Draggable(el);
    },
    setEditMode: function () {
      this.isEditMode = true;
      const id = this.itemProps.id;

      setTimeout(function () {
        document.getElementById(`textbox${id}`).focus();
      }, 100);
    },
    resetEditMode: function () {
      this.isEditMode = false;
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
