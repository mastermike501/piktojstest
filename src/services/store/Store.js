var store = {
  debug: true,
  idCounter: 0,
  state: {
    addedItems: []
  },
  addItem: function (type, value) {
    this.idCounter++;
    const newItem = {
      id: this.idCounter,
      type,
      value,
      x: 0,
      y: 0
    };
    this.state.addedItems.push(newItem);
  },
  getItems: function (type) {
    return this.state.addedItems.filter(item => item.type === type);
  }
};

export default store;