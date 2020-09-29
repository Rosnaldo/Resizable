const resizers = document.querySelector('.resizer');
const red = document.querySelector('.red');

let original_x = 0;
let original_y = 0;
let original_mouse_x = 0;
let original_mouse_y = 0;


resizers.addEventListener('mousedown', function(e) {
  e.preventDefault();
  e.stopPropagation();
  original_x = resizers.getBoundingClientRect().left;
  original_y = resizers.getBoundingClientRect().top;
  original_mouse_x = e.pageX;
  original_mouse_y = e.pageY;

  window.addEventListener('mousemove', move);
  window.addEventListener('mouseup', stopResize);
});

function move(e) {
  resizers.style.left = original_x + (e.pageX - original_mouse_x) + 'px';
  red.style.left = original_x + (e.pageX - original_mouse_x) + 'px';
  resizers.style.top = original_y + (e.pageY - original_mouse_y) + 'px';
  red.style.top = original_y + (e.pageY - original_mouse_y) + 'px';
}

function stopResize(e) {
  e.stopPropagation();
  window.removeEventListener('mousemove', move);
}
