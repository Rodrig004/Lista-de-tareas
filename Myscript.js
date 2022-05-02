function almacenar() {
    let Nombre = document.getElementById("NuevUsuario").value;/*Iniciar sesion por primera vez*/
    let Contraseña = document.getElementById("NuevClave").value;/*Iniciar sesion por primera vez*/
    let Email = document.getElementById("NuevCorreo").value;/*Iniciar sesion por primera vez*/

/*---------------------------------------------------------------------------------------------*/
    sessionStorage.setItem("claveNombre",Nombre);/*Iniciar sesion por primera vez*/
    localStorage.setItem("claveClave",Contraseña);/*Iniciar sesion por primera vez*/
    localStorage.setItem("claveEmail",Email);/*Iniciar sesion por primera vez*/

/*---------------------------------------------------------------------------------------------*/
    document.getElementById("NuevUsuario").value= "";/*Iniciar sesion por primera vez*/
    document.getElementById("NuevClave").value= "";/*Iniciar sesion por primera vez*/
    document.getElementById("NuevCorreo").value= "";/*Iniciar sesion por primera vez*/
}