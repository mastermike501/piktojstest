import Store from '../store/Store';

function Selectable(item) {

  function selectItem() {
    unselectCurItem();

    const el = document.getElementById(item.id);
    el.style.border = '2px black dashed';
    Store.selectItem(item);
  }

  function unselectCurItem() {
    const item = Store.state.currentlySelected;

    if (item) {
      const el = document.getElementById(item.id);
      el.style.border = 'none';
      Store.selectItem(null);
    }
  }

  return {
    selectItem
  };
}

export default Selectable;