let order = 1;
let adding = false;

const error = document.querySelector('.error');
const message = 'Please add a description.';

const add_btn = document.querySelector('.add');
add_btn.addEventListener('click', () => {
  const target = document.querySelector('#requested');
  if (adding == false) {
    adding = true;
    target.appendChild(create_item());
  } else {
    error.innerHTML = message;
  }
});

const create_item = () => {

  const item = document.createElement('div');
  document.body.appendChild(item);
  item.classList.add('item');
  item.id = 'item-' + order;
  item.draggable = true;

  item.addEventListener('dragstart', (e) => {

    e.dataTransfer.setData('text', e.target.id);
  })

  item.addEventListener('dragend', (e) => {
    return e.dataTransfer.clearData()
  })

  const input =  document.createElement('input');
  item.append(input);

  let save_btn = document.createElement('button');
  save_btn.innerHTML = "Save";

  save_btn.addEventListener('click', ()=> {
    error.innerHTML = '';
      if(input.value != ''){
        order += 1;
        item.innerHTML = input.value;
        adding = false;
      } else {
        error.innerHTML = message;
  }
  })
     item.appendChild(save_btn);
     return item;
};

document.querySelectorAll('.drop').forEach(element => {
    element.addEventListener('drop', (ev)=> {
      ev.preventDefault()
      const id = ev.dataTransfer.getData('text');
      ev.target.appendChild(document.getElementById(id))
    })

    element.addEventListener('dragover', (ev) => {
      ev.preventDefault()
    })


});