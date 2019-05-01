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
      x: '',
      y: ''
    };
    this.state.addedItems.push(newItem);
  },
  getItems: function (type) {
    return this.state.addedItems.filter(item => item.type === type);
  },
  selectItem: function (item) {
    this.state.selectedItem = item;
  },
  updateItem: function (updatedItem) {
    this.state.addedItems = this.state.addedItems.map(item => {
      if (item.id === updatedItem.id) {
        return updatedItem;
      }
      return item;
    });
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