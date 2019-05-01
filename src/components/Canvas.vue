<template>
  <!-- canvas -->
  <div
    class="canvas col-sm-8 col-md-8 col-lg-8">
    <div class="block">
      <!-- Add images and texts to here -->
      <DraggableImage
        v-for="item in getImageItems()"
        :key="item.id"
        :item="item" />
      <DraggableText
        v-for="item in getTextItems()"
        :key="item.id"
        :item="item" />
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
      sharedState: Store.state, // use store data
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
