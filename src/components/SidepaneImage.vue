<template>
  <img
    v-bind:src="src"
    v-on:click="addToCanvas"
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
      Store.addImage(this.src);
    }
  }
}
</script>

<style scoped>
  .clickable {
    cursor: pointer;
  }
</style>
