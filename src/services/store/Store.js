var store = {
  debug: true,
  idCounter: 0,
  state: {
    addedItems: [],
    currentlySelected: null
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
  },
  selectItem: function (item) {
    this.state.currentlySelected = item;
  },
  // deleteItem: function (id) {
  //   this.state.addedItems.find(item => item.id === id);
  // }
};

export default store;