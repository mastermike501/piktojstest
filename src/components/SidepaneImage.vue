<template>
  <img
    v-bind:src="src"
    @click="addToCanvas"
    title="Click me!"
    class="img-rounded clickable" />
</template>

<script>
import Store from '../services/store/Store';

export default {
  name: 'SidepaneImage',
  props: ['src'],
  methods: {
    addToCanvas: function() {
      Store.addItem('image', this.src);
    }
  }
}
</script>

<style scoped>
.clickable {
  cursor: pointer;
}
</style>
