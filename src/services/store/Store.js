var store = {
  idCounter: 0, // id incrementor
  state: {
    addedItems: [], // track added items
    selectedItem: null // track selected item
  },

  // add item and push to addedItems array
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

  // get items based on type; image or text
  getItems: function (type) {
    return this.state.addedItems.filter(item => item.type === type);
  },

  // set the selected item
  selectItem: function (item) {
    this.state.selectedItem = item;
  },

  // create a new array where the old value in the array is replaced
  // then update the addedItems array with the new copy
  updateItem: function (updatedItem) {
    this.state.addedItems = this.state.addedItems.map(item => {
      if (item.id === updatedItem.id) {
        return updatedItem;
      }
      return item;
    });
  },

  // delete selected item and set it to null
  deleteItem: function () {
    if (this.state.selectedItem) {
      const id = this.state.selectedItem.id;
      this.state.addedItems = this.state.addedItems.filter(item => item.id !== id);

      this.selectItem(null);
    }
  },
  saveItemsToLocalStorage: function () {
    sessionStorage.setItem('items', JSON.stringify(this.state.addedItems));
  },
  retrieveItemsFromLocalStorage: function () {
    if (sessionStorage.getItem('items')) {
      this.state.addedItems = JSON.parse(sessionStorage.getItem('items'));
    }
  }
};

export default store;