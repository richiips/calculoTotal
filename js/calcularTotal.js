const price = 150;
let cantidad = 0;
let totalPagar = 0;

document.querySelector('#price').innerHTML = price;
document.querySelector('#quantity').innerHTML = cantidad;
document.querySelector ('#totalPagar').innerHTML = totalPagar;

function sumarItem(){
    cantidad += 1;
    totalPagar = cantidad * price;
    document.querySelector('#quantity').innerHTML = cantidad;
    document.querySelector ('#totalPagar').innerHTML = totalPagar;
}

function restarItem(){
    cantidad -= 1;
    totalPagar = cantidad * price;
    document.querySelector('#quantity').innerHTML = cantidad;
    document.querySelector ('#totalPagar').innerHTML = totalPagar;
}