alert("Bienvenido, esta es la calculadora, digite los digitos y escoja que operacion realizar en base a estos")


function suma() {
    let num1=parseFloat(document.getElementById('1').value);
    let num2=parseFloat(document.getElementById('2').value);
    let sum=num1+num2;
alert("La suma es: "+sum.toFixed(2))
}


const sumar=document.getElementById('suma')

sumar.addEventListener('click',suma)


function resta() {
    let num1=parseFloat(document.getElementById('1').value);
    let num2=parseFloat(document.getElementById('2').value);
    let res=num1-num2;
alert("La resta es: "+res.toFixed(2))
}

const restar=document.getElementById('resta')

restar.addEventListener('click',resta)

function multiplicacion() {
    let num1=parseFloat(document.getElementById('1').value);
    let num2=parseFloat(document.getElementById('2').value);
    let mul=num1*num2;
alert("La multiplicacion es: "+mul.toFixed(2))
}
const multiplicar=document.getElementById('mult')

multiplicar.addEventListener('click',multiplicacion)


function division() {
    let num1=parseFloat(document.getElementById('1').value);
    let num2=parseFloat(document.getElementById('2').value);
    let div=num1/num2;
alert("La division es: "+div.toFixed(2))
}

const dividir=document.getElementById('div')

dividir.addEventListener('click',division)




