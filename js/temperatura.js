alert("Bienvenido, este programa le permitira hacer conversion de temperaturas, digite por favor las opciones y digite el campo")


function temp() {
    let opc1=document.getElementById('ce').value;
    let opc2=document.getElementById('ca').value;
    let temp=parseFloat(document.getElementById('temp').value);
    
    if (opc1==1) {
        if (opc2==1) {
            alert("Esta opcion es invalida ya que no se puede realizar la conversion al mismo tipo de temperatura");
        }
        if (opc2==2) {
            let final=(temp* 1.8) + 32;
            alert("La conversion de C a F es:"+final.toFixed(2));
        }
        if (opc2==3) {
            let final=temp+273.15;
            alert("La conversion de C a K es:"+final.toFixed(2));
        }
    }
    if (opc1==2) {
        if (opc2==1) {
            let final=(temp -32) / 1.8; 
            alert("La conversion de F a C es:"+final.toFixed(2));
        }
        if (opc2==2) {
            alert("Esta opcion es invalida ya que no se puede realizar la conversion al mismo tipo de temperatura");
        }
        if (opc2==3) {
            let final=  0.55*(temp-32)+273; 
            alert("La conversion de F a K es:"+final.toFixed(2));
        }
    }
    if (opc1==3) {
        if (opc2==1) {
            let final=temp-273.15;
            alert("La conversion de K a C es:"+final.toFixed(2));
        }
        if (opc2==2) {
            let final=1.8* (temp-273.15) + 32; 
            alert("La conversion de K a F es:"+final.toFixed(2));
        }
        if (opc2==3) {
            alert("Esta opcion es invalida ya que no se puede realizar la conversion al mismo tipo de temperatura");
        }
    }

}

const conversion=document.getElementById('calc')

conversion.addEventListener('click',temp)
