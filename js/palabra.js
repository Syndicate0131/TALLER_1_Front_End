alert("Bienvenido, esta ejercicio de Palabra, digite la palabra y que operacion realizar")

function cantidad() {
    let palabra=document.getElementById('pal').value;
    alert("La palabra contiene: "+palabra.length+" Caracteres")
}

function mayus() {
    let palabra=document.getElementById('pal').value;
    alert("La palabra en mayusculas es: "+palabra.toUpperCase() )
}

function minus() {
    let palabra=document.getElementById('pal').value;
    alert("La palabra en minusculas es: "+palabra.toLowerCase())
}

function carac() {
    let palabra=document.getElementById('pal').value;
    alert("El primer caracter de la palabra es: "+palabra.substring(0,1));
}

const cant=document.getElementById('cantidad')

cant.addEventListener('click',cantidad)

const may=document.getElementById('mayus')

may.addEventListener('click',mayus)

const min=document.getElementById('minus')

min.addEventListener('click',minus)

const cara=document.getElementById('carac')

cara.addEventListener('click',carac)