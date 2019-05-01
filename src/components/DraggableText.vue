<template>
  <div
    class="draggable"
    :id="itemProps.id"
    @mousedown="registerDraggable"
    @click="selectItem"
    @dblclick="setEditMode">
    <input
      type="text"
      :id="getId()"
      v-if="isEditMode"
      v-model="itemProps.value"
      @blur="resetEditMode">
    <span v-else>
      {{ itemProps.value }}
    </span>
  </div>
</template>

<script>
import Draggable from '../services/behaviors/Draggable';
import Selectable from '../services/behaviors/Selectable';
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
    selectItem: function () {
      Selectable(this.itemProps).selectItem();
    },
    registerDraggable: function () {
      const el = document.getElementById(this.itemProps.id);
      Draggable(el);
    },
    setEditMode: function () {
      this.isEditMode = true;
      const id = this.getId();

      setTimeout(function () {
        document.getElementById(id).focus();
      }, 100);
    },
    resetEditMode: function () {
      this.isEditMode = false;
    },
    getId: function () {
      return `textbox${this.itemProps.id}`;
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
