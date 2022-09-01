alert("Bienvenido, este programa evaluara que tipo de triangulo es segun los datos ingresados")

function tipotriangulo() {
    let tri1=parseInt(document.getElementById('tri1').value);
    let tri2=parseInt(document.getElementById('tri2').value);
    let tri3=parseInt(document.getElementById('tri3').value);
    if (tri1==tri2 && tri1==tri3) {
        alert("El triangulo es equilatero");
    }
    if (tri1==tri2 && tri1!=tri3 || tri2==tri3 && tri3!=tri1 || tri1==tri3 && tri1!=tri2) {
        alert("El triangulo es isosceles"); 
    }
    if (tri1!=tri2 && tri1!=tri3 && tri2!=tri3) {
        alert("El triangulo es escaleno"); 
    }
}