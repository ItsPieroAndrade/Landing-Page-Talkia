
const open = document.getElementById('Cambiar');
const close = document.getElementById('Cerrar');
const modal = document.getElementById('modal_container');

open.addEventListener('click',() => {
    modal.classList.add('show');
});

close.addEventListener('click',() => {
    modal.classList.remove('show');
});