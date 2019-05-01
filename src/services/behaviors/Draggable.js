// Draggable code sourced from https://www.w3schools.com/howto/howto_js_draggable.asp
// Adjusted for use by Michael Kong

// accept item data and a callback functon
function Draggable(item, cb) {
  const el = document.getElementById(item.id);
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  el.onmousedown = dragMouseDown;

  // on mousedown, register the current position
  // and set the onmouseup and onmousemove events
  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  // on mousemove, move the element to show
  // user that the element is being dragged
  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    el.style.top = (el.offsetTop - pos2) + "px";
    el.style.left = (el.offsetLeft - pos1) + "px";
  }

  // on mouseup, unset the event handlers and trigger
  // the callback with the latest x and y values
  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;

    cb(el.style.top, el.style.left);
  }
}

export default Draggable;