/*
    Formulario Basico para mostrar un proyecto y construcion con TypeScript y JavaScript
    autor: Carlos A. Cobo
    fecha: 15 - Enero - 2017
*/
var Usuario = (function () {
    // --- Constructor ---
    function Usuario() {
    }
    // --- Metodos Setters ---
    Usuario.prototype.setId = function (id) {
        this.id = id;
    };
    Usuario.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Usuario.prototype.setApellido = function (apellido) {
        this.apellido = apellido;
    };
    Usuario.prototype.setEdad = function (edad) {
        this.edad = edad;
    };
    Usuario.prototype.setUsuario = function (usuario) {
        this.usuario = usuario;
    };
    Usuario.prototype.setClave = function (clave) {
        this.clave = clave;
    };
    Usuario.prototype.setCorreo = function (correo) {
        this.correo = correo;
    };
    // --- Metodos Getters ---
    Usuario.prototype.getId = function () {
        return this.id;
    };
    Usuario.prototype.getNombre = function () {
        return this.nombre;
    };
    Usuario.prototype.getApellido = function () {
        return this.apellido;
    };
    Usuario.prototype.getEdad = function () {
        return this.edad;
    };
    Usuario.prototype.getUsuario = function () {
        return this.usuario;
    };
    Usuario.prototype.getClave = function () {
        return this.clave;
    };
    Usuario.prototype.getCorreo = function () {
        return this.correo;
    };
    return Usuario;
}());
// arreglo para almacenar los usuarios
var usuarios = [];
// --- Logica
function guardar() {
    /*
    Se obtiene el valor en la caja con ID=txtNombre
    y se almacena en la variable "nombre"
    */
    var nombre = document.getElementById("txtNombre").value.toString();
    var apellido = document.getElementById("txtApellido").value.toString();
    var edad = document.getElementById("txtEdad").value.toString();
    var usuario = document.getElementById("txtUsuario").value.toString();
    var clave = document.getElementById("txtClave").value.toString();
    var correo = document.getElementById("txtCorreo").value.toString();
    // --- Validar si el nombre no esta vacio
    if (nombre.length != 0) {
        // --- Validar si el apellido no esta vacio
        if (apellido.length != 0) {
            // --- Validar si la edad no esta vacia
            if (edad != 0) {
                // se instancia un usuario y se settean valores
                var usuario_new = new Usuario();
                usuario_new.setNombre(nombre);
                usuario_new.setApellido(apellido);
                usuario_new.setEdad(edad);
                usuario_new.setUsuario(usuario);
                usuario_new.setClave(clave);
                usuario_new.setCorreo(correo);
                // anexarlo al array
                usuarios.push(usuario_new);
                var list = "";
                // --- Recorrer arreglo
                for (var i = 0; i < usuarios.length; ++i) {
                    list = list + "<li>" + usuarios[i].getNombre() + ", " + usuarios[i].getApellido() + ", " + usuarios[i].getEdad() + ", " + usuarios[i].getUsuario() + ", " + usuarios[i].getClave() + ", " + usuarios[i].getCorreo() + "</li>";
                }
                var listado = document.getElementById("listado");
                listado.innerHTML = list;
                // --- dejas campos de texto limpios
                document.getElementById("txtNombre").value = "";
                document.getElementById("txtApellido").value = "";
                document.getElementById("txtEdad").value = "";
                document.getElementById("txtUsuario").value = "";
                document.getElementById("txtClave").value = "";
                document.getElementById("txtCorreo").value = "";
            }
            else {
                var mensaje = document.getElementById("mensaje");
                mensaje.innerHTML = '<div class="alert alert-danger alert-dismissible" role="alert">' + '<button type="button" class="close" data-dismiss="alert" aria-label="Close">' + '<span aria-hidden="true">' + "&times;" + '</span>' + '</button>' + '<strong>' + "Edad!" + '</strong>' + " se encuentra vacia.";
            }
        }
        else {
            var mensaje = document.getElementById("mensaje");
            mensaje.innerHTML = "Falta el apellido por lo que no se pudo guardar";
        }
    }
    else {
        var mensaje = document.getElementById("mensaje");
        mensaje.innerHTML = "Falta el nombre por lo que no se pudo guardar";
    }
}
