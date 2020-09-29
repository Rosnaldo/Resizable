const resizers = document.querySelector('.resizer').childNodes;
const resizer = document.querySelector('.resizer');
const elem_main = document.querySelector('.red');

makeResizable();

function makeResizable() {

  const minimum_size = 20;

  let original_width = 0;
  let original_height = 0;
  let original_x = 0;
  let original_y = 0;
  let original_mouse_x = 0;
  let original_mouse_y = 0;

  for (let i = 0; i < resizers.length; i++) {
    const currentResizer = resizers[i];

    currentResizer.addEventListener('mousedown', function(e) {
      e.stopPropagation();
      e.preventDefault();
      original_width = parseFloat(getComputedStyle(elem_main, null)
                        .getPropertyValue('width').replace('px', ''));
      original_height = parseFloat(getComputedStyle(elem_main, null)
                         .getPropertyValue('height').replace('px', ''));
      original_x = elem_main.getBoundingClientRect().left;
      original_y = elem_main.getBoundingClientRect().top;
      original_mouse_x = e.pageX;
      original_mouse_y = e.pageY;

      window.addEventListener('mousemove', resize);
      window.addEventListener('mouseup', (e) => {
        stopResize(e);
      });
    });
    
    function resize(e) {
      if (currentResizer.classList.contains('br')) {
        const width = original_width + (e.pageX - original_mouse_x);
        const height = original_height + (e.pageY - original_mouse_y);
        if (width > minimum_size) {
          elem_main.style.width = width + 'px';
          resizer.style.width = width + 'px';
        }
        if (height > minimum_size) {
          elem_main.style.height = height + 'px';
          resizer.style.height = height + 'px';
        }
      }
      else if (currentResizer.classList.contains('bl')) {
        const width = original_width - (e.pageX - original_mouse_x);
        const height = original_height + (e.pageY - original_mouse_y);
        if (height > minimum_size) {
          elem_main.style.height = height + 'px';
          resizer.style.height = height + 'px';
        }
        if (width > minimum_size) {
          elem_main.style.width = width + 'px';
          resizer.style.width = width + 'px';
          elem_main.style.left = original_x + (e.pageX - original_mouse_x) + 'px';
          resizer.style.left = original_x + (e.pageX - original_mouse_x) + 'px';
        }
      }
      else if (currentResizer.classList.contains('tr')) {
        const width = original_width + (e.pageX - original_mouse_x);
        const height = original_height - (e.pageY - original_mouse_y);
        if (width > minimum_size) {
          elem_main.style.width = width + 'px';
          resizer.style.width = width + 'px';
        }
        if (height > minimum_size) {
          elem_main.style.height = height + 'px';
          resizer.style.height = height + 'px';
          elem_main.style.top = original_y + (e.pageY - original_mouse_y) + 'px';
          resizer.style.top = original_y + (e.pageY - original_mouse_y) + 'px';
        }
      }
      else {
        const width = original_width - (e.pageX - original_mouse_x);
        const height = original_height - (e.pageY - original_mouse_y);
        if (width > minimum_size) {
          elem_main.style.width = width + 'px';
          resizer.style.width = width + 'px';
          elem_main.style.left = original_x + (e.pageX - original_mouse_x) + 'px';
          resizer.style.left = original_x + (e.pageX - original_mouse_x) + 'px';
        }
        if (height > minimum_size) {
          elem_main.style.height = height + 'px';
          resizer.style.height = height + 'px';
          elem_main.style.top = original_y + (e.pageY - original_mouse_y) + 'px';
          resizer.style.top = original_y + (e.pageY - original_mouse_y) + 'px';
        }
      }
    }
    
    function stopResize(e) {
      window.removeEventListener('mousemove', resize);
    }
  }
}

