const resizable = document.querySelector('.resizable');
const red = document.querySelector('.red');
const child = resizable.firstElementChild;
const resizers = document.createElement('div');
resizers.setAttribute('class','resizer');

let selected = false;
  
createSelect();
select();

function createSelect() {
  const tl = document.createElement('div');
  tl.setAttribute('class','tl');
  const tr = document.createElement('div');
  tr.setAttribute('class','tr');
  const bl = document.createElement('div');
  bl.setAttribute('class', 'bl');
  const br = document.createElement('div');
  br.setAttribute('class', 'br');

  resizable.appendChild(resizers);
  
  resizers.appendChild(tl);
  resizers.appendChild(tr);
  resizers.appendChild(bl);
  resizers.appendChild(br);

  var coor = child.getBoundingClientRect();

  resizers.style.top = `${coor.top}px`;
  resizers.style.left = `${coor.left}px`;

  resizers.style.width =      
    red.getBoundingClientRect().width + 'px';

  resizers.style.height =      
    red.getBoundingClientRect().height + 'px';  

  resizers.querySelectorAll('div').forEach(elem => {
    if(elem.className == 'tl') {
      elem.style.left = '-4px';
      elem.style.top = '-4px';
    }
    if(elem.className == 'tr') {
      elem.style.right = '-4px';
      elem.style.top = '-4px';
    }
    if(elem.className == 'bl') {
      elem.style.left = '-4px';
      elem.style.bottom = '-4px';
    }
    if(elem.className == 'br') {
      elem.style.right = '-4px';
      elem.style.bottom = '-4px';
    }
  });
}

function select() {
  resizers.querySelectorAll('div')
    .forEach(elem => {
    selected ? elem.style.display = 'block' :
                elem.style.display = 'none'
  });
}

window.addEventListener('click', (e) => {
  if(e.target !== resizers && e.target !== resizers.childNodes[0]
    && e.target !== resizers.childNodes[1] && e.target !== resizers.childNodes[2]
    && e.target !== resizers.childNodes[3]) {
      selected = false;
      select();
  }
});

resizers.addEventListener('dblclick', () => {
  selected = !selected;
  select();
});
