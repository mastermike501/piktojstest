<template>
  <div
    class="draggable"
    :id="item.id"
    @mousedown="registerDraggable"
    @click="selectItem"
    @dblclick="setEditMode">
    <input
      type="text"
      :id="getId()"
      v-if="isEditMode"
      v-model="item.value"
      @blur="resetEditMode">
    <span v-else>
      {{ item.value }}
    </span>
  </div>
</template>

<script>
import Store from '../services/store/Store';
import Draggable from '../services/behaviors/Draggable';
import Selectable from '../services/behaviors/Selectable';
import { setTimeout } from 'timers';

export default {
  name: 'DraggableText',
  props: ['item'],
  data() {
    return {
      isEditMode: false
    };
  },
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
      return `textbox${this.item.id}`;
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
