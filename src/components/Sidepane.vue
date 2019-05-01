<template>
  <div class="sidepane col-sm-2 col-md-2 col-lg-2">
    <div class="form">
      <h3>Form</h3>
      <input type="file" class="form-control" placeholder="Upload Your Images" name="upload">
      <button id="submit" class="btn btn-default">upload</button>
      <!-- Upload Form here -->
    </div>
    <hr>
    <div class="assets">
      <h3>Assets</h3>
      <div class="text">
        <h4>Text</h4>
        <button id="addText" class="btn btn-default" @click="addToCanvas">Add Text</button>
      </div>
      <div class="image">
        <h4>Images</h4>
        <ul class="list-unstyled">
          <!-- List of images here -->
          <li v-for="image in images" v-bind:key="image">
            <SidepaneImage v-bind:src="image" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ServerApi from '../services/api/Server';
import Store from '../services/store/Store';
import SidepaneImage from './SidepaneImage.vue'

export default {
  components: {
    SidepaneImage
  },
  data() {
    return {
      images: []
    };
  },
  created() {
    ServerApi.getImages()
      // .then(res => console.log(res));
      .then(res => this.images = res);
  },
  methods: {
    addToCanvas: function () {
      Store.addItem('text', 'Double click to edit');
    }
  }
}
</script>
