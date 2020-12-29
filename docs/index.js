const body = document.body;
const popup = document.getElementById('popup');

const po1 = document.getElementById('po1');
const po2 = document.getElementById('po2');
const po3 = document.getElementById('po3');

let popUpFocused = false;

window.onload = () => {
  body.addEventListener('contextmenu', (e) => {
  
    e.preventDefault();
  
    popup.style.display = 'flex';
    popup.style.top = e.clientY >= 50 ? `${ e.clientY - 50 }px` : `${ e.clientY }px`;
    popup.style.left = (e.clientX + 500) > body.offsetWidth ? `${ e.clientX - 500 }px` : `${ e.clientX }px`;
  
  });
  
  body.addEventListener('click', (e) => {
  
    popup.style.display = 'none';
  
  });
  
  po1.onclick = () => {
    alert('Opção 1');
  }
  
  po2.onclick = () => {
    alert('Opção 2');
  }
  
  po3.onclick = () => {
    alert('Opção 3');
  }
}



