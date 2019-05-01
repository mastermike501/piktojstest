<template>
  <!-- Composed of two parts, the editable input
  and the display span -->
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
      // track whether to show or hide the two elements
      isEditMode: false
    };
  },
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
    },

    // when parent el is double clicked,
    // show the input el
    setEditMode: function () {
      this.isEditMode = true;
      const id = this.getId();

      // need a timeout to wait for the input el to render
      // seems hack-ish, there's probably a better way to do it...
      setTimeout(function () {
        document.getElementById(id).focus();
      }, 100);
    },

    // on input blur, hide the input el
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
