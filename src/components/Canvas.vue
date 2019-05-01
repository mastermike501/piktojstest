<template>
  <!-- canvas -->
  <div class="canvas col-sm-8 col-md-8 col-lg-8">
    <div class="block">
      <!-- Add images and texts to here -->
      <DraggableImage
        v-for="item in getImageItems()"
        v-bind:key="item.id"
        v-bind:item-props="item" />
      <DraggableText
        v-for="item in getTextItems()"
        v-bind:key="item.id"
        v-bind:item-props="item" />
    </div>
  </div>
</template>

<script>
import Store from '../services/store/Store';
import DraggableImage from './DraggableImage';
import DraggableText from './DraggableText';

export default {
  components: {
    DraggableImage,
    DraggableText
  },
  data() {
    return {
      sharedState: Store.state,
      privateState: {}
    };
  },
  methods: {
    getImageItems: function () {
      return Store.getItems('image');
    },
    getTextItems: function () {
      return Store.getItems('text');
    }
  }
}
</script>
