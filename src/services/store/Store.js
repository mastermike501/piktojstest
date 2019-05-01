var store = {
  debug: true,
  idCounter: 0,
  state: {
    addedItems: [],
    selectedItem: null
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
    this.state.selectedItem = item;
  },
  deleteItem: function () {
    if (this.state.selectedItem) {
      const id = this.state.selectedItem.id;
      this.state.addedItems = this.state.addedItems.filter(item => item.id !== id);

      this.selectItem(null);
    }
  }
};

export default store;