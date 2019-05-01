var store = {
  debug: true,
  state: {
    addedImages: []
  },
  addImage: function (imageSrc) {
    var id = this.state.addedImages.length + 1;
    var newImage = {
      id,
      src: imageSrc,
      location: [0, 0]
    };
    this.state.addedImages.push(newImage);
  }
};

export default store;