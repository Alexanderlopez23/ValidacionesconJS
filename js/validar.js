
function validar() {
//  Variables de los campos respectivos
    var documento;
    var nombre;
    var correo;
    var usuario;
    var contraseña;
    var expresion;



//usando expresiones regulares para correo:

    expresion = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;




//obtener el valor de los campos y guardanose en variables 
//primero varible y luego atributos id y obtener values
    documento = document.getElementById("documento").value;
    nombre = document.getElementById("nombre").value;
    correo = document.getElementById("correo").value;
    usuario = document.getElementById("usuario").value;
    contraseña = document.getElementById("contraseña").value;

//preguntar si esta vacio documento entonces si esta vacio mandar un alert de la libreria
//si no dejar pasar los datos..
    if (documento === "") {
        Swal.fire({
            icon: 'error',
            text: 'El campo documento esta vacio'
        })
        //detenerse con return false
        return false
    }
//preguntar si esta vacio documento entonces si esta vacio mandar un alert de la libreria
//si no dejar pasar los datos..
    if (nombre === "") {
        Swal.fire({
            icon: 'error',
            text: 'El campo nombre esta vacio'
        })
        return false
    }

    if (correo === "") {
        Swal.fire({
            icon: 'error',
            text: 'El campo correo esta vacio'
        })
        return false
    }

    if (usuario === "") {
        Swal.fire({
            icon: 'error',
            text: 'El campo usuario esta vacio'
        })
        return false
    }
    if (contraseña === "") {
        Swal.fire({
            icon: 'warning',
            text: 'El campo contraseña esta vacio'
        })
        return false;
    }
    //si el campo de la variable nombre es mas largo que x valor decir que es demasiado largo 

    else if
            (nombre.length > 20) {
        Swal.fire({
            icon: 'warning',
            text: 'El campo nombre es demasiado largo'
        })
        return false;
    }
    //campos ultimos usuario y clave

    else if
            (usuario.length > 30) {
        Swal.fire({
            icon: 'error',
            text: 'El campo usuario no puede pasar de 30 caracteres'
        })
        return false;
    }
    //Esta siguiente condicion es para solo numeros DECIR isNaN y la variable que requiere tener
    //numeros
    //isNaN(si no es un numero).

    else if
            (isNaN(documento)) {
        Swal.fire({
            icon: 'error',
            text: 'El campo de documento no corresponden a numeros'
        })
        return false;
    }

    //validando el correo con expresion regular primero accedemos a la expresion definida y 
    //y luego a test, y luego a la variable a cumplir
    else if (!expresion.test(correo)) {
            Swal.fire({
            icon: 'error',
            text: 'El campo del correo no se cumple'
        })
        return false;
    }
}


