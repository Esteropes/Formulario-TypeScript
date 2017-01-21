/*
	Formulario Basico para mostrar un proyecto y construcion con TypeScript y JavaScript
	autor: Carlos A. Cobo
	fecha: 15 - Enero - 2017
*/

import $ = require("jquery");


class Usuario {
	
	// --- Variables y Constantes ---

	private id:number;
	private nombre:string;
	private apellido:string;
	private edad:number;
	private usuario:string;
	private clave:string;
	private correo:string;

	// --- Constructor ---

	constructor() {

	}

	// --- Metodos Setters ---

	setId(id:number){
		this.id = id;
	}

	setNombre(nombre:string){
		this.nombre = nombre;
	}

	setApellido(apellido:string){
		this.apellido = apellido;
	}

	setEdad(edad:number){
		this.edad = edad;
	}

	setUsuario(usuario:string){
		this.usuario = usuario;
	}

	setClave(clave:string){
		this.clave = clave;
	}

	setCorreo(correo:string){
		this.correo = correo;
	}

	// --- Metodos Getters ---

	getId(){
		return this.id;
	}

	getNombre(){
		return this.nombre;
	}

	getApellido(){
		return this.apellido;
	}

	getEdad(){
		return this.edad;
	}

	getUsuario(){
		return this.usuario;
	}

	getClave(){
		return this.clave;
	}

	getCorreo(){
		return this.correo;
	}

}

// arreglo para almacenar los usuarios
var usuarios = [];

// --- Logica

function guardar() {


	/*
	Se obtiene el valor en la caja con ID=txtNombre
	y se almacena en la variable "nombre"
	*/
	var nombre = (<HTMLInputElement>document.getElementById("txtNombre")).value.toString();
	var apellido = (<HTMLInputElement>document.getElementById("txtApellido")).value.toString();
	var edad:any = (<HTMLInputElement>document.getElementById("txtEdad")).value.toString();
	var usuario = (<HTMLInputElement>document.getElementById("txtUsuario")).value.toString();
	var clave = (<HTMLInputElement>document.getElementById("txtClave")).value.toString();
	var correo = (<HTMLInputElement>document.getElementById("txtCorreo")).value.toString();
	
	// --- Validar si el nombre no esta vacio
	if(nombre.length != 0) {

		// --- Validar si el apellido no esta vacio
		if(apellido.length != 0) {

			// --- Validar si la edad no esta vacia
			if(edad != 0) {
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
					list = list+"<li>"+usuarios[i].getNombre()+", "+usuarios[i].getApellido()+", "+usuarios[i].getEdad()+", "+usuarios[i].getUsuario()+", "+usuarios[i].getClave()+", "+usuarios[i].getCorreo()+"</li>";
				}

				var listado = <HTMLElement> document.getElementById("listado");
				listado.innerHTML = list;

				// --- dejas campos de texto limpios
				(<HTMLInputElement> document.getElementById("txtNombre")).value = "" ;
				(<HTMLInputElement> document.getElementById("txtApellido")).value = "" ;
				(<HTMLInputElement> document.getElementById("txtEdad")).value = "" ;
				(<HTMLInputElement> document.getElementById("txtUsuario")).value = "" ;
				(<HTMLInputElement> document.getElementById("txtClave")).value = "" ;
				(<HTMLInputElement> document.getElementById("txtCorreo")).value = "" ;

				var mensaje_exitoso = <HTMLElement>document.getElementById("mensaje");
				mensaje_exitoso.innerHTML = '<div class="alert alert-success alert-dismissible" role="alert">'+'<button type="button" class="close" data-dismiss="alert" aria-label="Close">'+'<span aria-hidden="true">'+"&times;"+'</span>'+'</button>'+'<strong>'+"Ingreso Exitoso!"+'</strong>'+ ", la informacion se guardo con exito.";
				var a = setInterval(mensaje_exitoso, 1000);
				clearInterval(a);

			}else{
				var mensaje_1 = <HTMLElement>document.getElementById("mensaje");
				mensaje_1.innerHTML = '<div class="alert alert-danger alert-dismissible" role="alert">'+'<button type="button" class="close" data-dismiss="alert" aria-label="Close">'+'<span aria-hidden="true">'+"&times;"+'</span>'+'</button>'+'<strong>'+"Edad!"+'</strong>'+ " se encuentra vacia.";
			}
			
		}else{
			var mensaje_2 = <HTMLElement>document.getElementById("mensaje");
			mensaje_2.innerHTML = "Falta el apellido por lo que no se pudo guardar";
		}

	}else{
		var mensaje_3 = <HTMLElement>document.getElementById("mensaje");
		mensaje_3.innerHTML = "Falta el nombre por lo que no se pudo guardar";
	}
	
}