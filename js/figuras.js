function triangulo() {
    let bt=parseFloat(document.getElementById('bt').value);
    let at=parseFloat(document.getElementById('at').value);
    let opct=document.getElementById('opct').value;
    if (opct==1) {
        area=(bt*at)/2;
        alert("El area del triangulo es: "+area.toFixed(2));
    }
    if (opct==2) {
            peri=bt+at;
            alert("El perimetro del triangulo es: "+peri.toFixed(2));
    }
}

function cuadrado() {
    let lc=parseFloat(document.getElementById('lc').value);
    let opcc=document.getElementById('opcc').value;
    if (opcc==1) {
        area=lc*lc;
        alert("El area del cuadrado es: "+area.toFixed(2));
    }
    if (opcc==2) {
            peri=lc+lc+lc+lc;
            alert("El perimetro del cuadrado es: "+peri.toFixed(2));
    }
}

function rectangulo() {
    let br=parseFloat(document.getElementById('br').value);
    let ar=parseFloat(document.getElementById('ar').value);
    let opct=document.getElementById('opcr').value;
    if (opct==1) {
        area=br*ar;
        alert("El area del rectangulo es: "+area.toFixed(2));
    }
    if (opct==2) {
            peri=(br+br)+(ar+ar);
            alert("El perimetro del rectangulo es: "+peri.toFixed(2));
    }
}

function circulo() {
    let rc=parseFloat(document.getElementById('rc').value);
    let opcci=document.getElementById('opcci').value;
    if (opcci==1) {
        area=(rc*rc)*3.1416;
        alert("El area del circulo es: "+area.toFixed(2));
    }
    if (opcci==2) {
            peri=2*3.1416*rc;
            alert("El perimetro del circulo es: "+peri.toFixed(2));
    }
}