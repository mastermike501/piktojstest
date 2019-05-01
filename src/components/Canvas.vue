<template>
  <!-- canvas -->
  <div class="canvas col-sm-8 col-md-8 col-lg-8">
    <div class="block">
      <!-- Add images and texts to here -->
    </div>
  </div>
</template>

<script>
import Store from '../services/store/Store';

export default {
  data() {
    return {
      sharedState: Store.state,
      privateState: {}
    };
  }
}
</script>
