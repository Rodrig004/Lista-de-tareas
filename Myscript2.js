function almacenar() {
    let Usuario1 = document.getElementById("Usuario").value;/*Iniciar sesion*/
    let Contra = document.getElementById("Clave").value;/*Iniciar sesion*/
/*---------------------------------------------------------------------------------------------*/
    localStorage.setItem("claveContras",Contra);/*Iniciar sesion*/
    sessionStorage.setItem("claveUsuario",Usuario1);/*Iniciar sesion*/
/*---------------------------------------------------------------------------------------------*/
    document.getElementById("Usuario").value= "";/*Iniciar sesion*/
    document.getElementById("Clave").value= "";/*Iniciar sesion*/
}