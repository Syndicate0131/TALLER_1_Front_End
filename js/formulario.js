const form = document.getElementById('frm-usuario');
const campos = document.querySelectorAll('#frm-usuario input');

const inputs = {
    numdoc: false,
    nombre: false,
    apellido: false,
    correo: false,
    password: false,
    password2: false
    }

const reglas={
    textos: /^[a-zA-Z0-9]/,
    numeros: /^\d{5,}$/,
    password: /^(?=.*\d)(?=.*[!@#$%&*)(?=.*[a-z])(?=.*[A-Z]).{10,}$/,
    correo:  /^[a-zA-Z0-9]+@misena.edu.co$/
}


const validarPassword=()=>{
    const pass1 = document.getElementById('password');
    const pass2 = document.getElementById('password2');
    if (pass1.value === pass2.value) {
        document.getElementById('g-password2').classList.remove('error');
        document.getElementById('g-password2').classList.add('success');
        document.querySelector('#g-password2 .msn-error').classList.remove('msn-error-visible');
        inputs['password2']=true;
    } else {
        document.getElementById('g-password2').classList.add('error');
        document.querySelector('#g-password2 .msn-error').classList.add('msn-error-visible');
    }
}

const validarCampos=(e)=>{
    console.log(e.target.name);
    switch (e.target.name) {
        case "numdoc":
            if (reglas.numeros.test(e.target.value)) {
                document.getElementById('g-numdoc').classList.remove('error');
                document.getElementById('g-numdoc').classList.add('success');
                document.querySelector('#g-numdoc .msn-error').classList.remove('msn-error-visible');
                inputs['numdoc']=true;
            } else {
                document.getElementById('g-numdoc').classList.add('error');
                document.querySelector('#g-numdoc .msn-error').classList.add('msn-error-visible');
            }
        break;

        case "nombre":
            if (reglas.textos.test(e.target.value)) {
                document.getElementById('g-nombre').classList.remove('error');
                document.getElementById('g-nombre').classList.add('success');
                document.querySelector('#g-nombre .msn-error').classList.remove('msn-error-visible');
                inputs['nombre']=true;
            } else {
                document.getElementById('g-nombre').classList.add('error');
                document.querySelector('#g-nombre .msn-error').classList.add('msn-error-visible');
            }
        break;
                
        case "apellido":
            if (reglas.textos.test(e.target.value)) {
                document.getElementById('g-apellido').classList.remove('error');
                document.getElementById('g-apellido').classList.add('success');
                document.querySelector('#g-apellido .msn-error').classList.remove('msn-error-visible');
                inputs['apellido']=true;
            } else {
                document.getElementById('g-apellido').classList.add('error');
                document.querySelector('#g-apellido .msn-error').classList.add('msn-error-visible');
            }
            break;

        case "correo":
            if (reglas.correo.test(e.target.value)) {
                document.getElementById('g-correo').classList.remove('error');
                document.getElementById('g-correo').classList.add('success');
                document.querySelector('#g-correo .msn-error').classList.remove('msn-error-visible');
                inputs['correo']=true;
            } else {
                document.getElementById('g-correo').classList.add('error');
                document.querySelector('#g-correo .msn-error').classList.add('msn-error-visible');
            }
        break;

        case "password":
            if (reglas.password.test(e.target.value)) {
                document.getElementById('g-password').classList.remove('error');
                document.getElementById('g-password').classList.add('success');
                document.querySelector('#g-password .msn-error').classList.remove('msn-error-visible');
                inputs['password']=true;
            } else {
                document.getElementById('g-password').classList.add('error');
                document.querySelector('#g-password .msn-error').classList.add('msn-error-visible');
            }
        break;
        case "password2":
            validarPassword();
        break;

                
    }
    }

campos.forEach((campo) =>{
    campo.addEventListener('keyup', validarCampos);
    campo.addEventListener('blur', validarCampos);
});


form.addEventListener('submit', e => {
    e.preventDefault();
    const terminos = document.getElementById('terminos');
    if (inputs.numdoc == true && inputs.nombre == true && inputs.apellido == true && inputs.correo == true && inputs.password == true  && inputs.password2 == true && terminos.checked) {
        alert("El usuario se a registrado correctamente.");
        document.getElementById('form-no-enviado').classList.remove('frm-no-enviado-activo');
        
    } else {
        document.getElementById('form-no-enviado').classList.add('frm-no-enviado-activo');
    }
});

