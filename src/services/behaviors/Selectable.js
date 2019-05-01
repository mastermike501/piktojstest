import Store from '../store/Store';

function Selectable(item) {

  function selectItem() {
    unselectCurItem();

    const el = document.getElementById(item.id);
    el.style.border = '2px black dashed';
    Store.selectItem(item);
  }

  function unselectCurItem() {
    const selectedItem = Store.state.selectedItem;

    if (selectedItem) {
      const el = document.getElementById(selectedItem.id);
      el.style.border = 'none';
      Store.selectItem(null);
    }
  }

  return {
    selectItem
  };
}

export default Selectable;