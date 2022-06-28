// Variables
let input = document.querySelector('#input');
let btns = document.querySelector('#btns');
let ul = document.querySelector('ul');
let p = document.querySelector('p');

// Agregando tareas
btns.addEventListener ('click', function (e){
    e.preventDefault();

    const text = input.value;

    if (text !== "") {
    let lista = document.createElement('li');
    lista.classList.add('list-group-item')
    lista.innerText = text;
    ul.appendChild(lista);
    lista.appendChild(btnborrar());
    
}   
    input.value = "";
    p.style.display = "none";
});

//ELIMINAR TAREA


function btnborrar() {
  
  const btnborrar = document.createElement('button');
  btnborrar.textContent = "X";
  btnborrar.className = "delete";
  btnborrar.addEventListener('click', (e) => {
    const item = e.target.parentElement;
    ul.removeChild(item);

    const items = document.querySelectorAll('li');
        if(items.length === 0) {
            empty.style.display = "block";
        }
});
return btnborrar;
}