const input = document.getElementById("input");
const btn_todo = document.getElementById("btn_todo");
const contenedor_todo = document.querySelector(".contenedor_todo");
let id=1;

/*
<div class="contenedor_lista">
    <div class="contenedor_lista-1">
        <input type="checkbox" class="casilla">
        <p class="actividad">Tarea</p>
    </div>
    <div class="contenedor_lista-btn">
        <button class="btn-eliminar"><i class="bi bi-trash3-fill"></i></button>
     </div>
</div>*/


function addTodo(){
    const div_todo = document.createElement("div");
    const div_contenedor = document.createElement("div");
    const checkbox = document.createElement("input");
    const parrafo = document.createElement("p");
    const div_boton = document.createElement("div");
    const button = document.createElement("button");
    const icono = document.createElement("i");

    parrafo.innerHTML = input.value;
    div_todo.classList.add("contenedor_lista");
    div_contenedor.classList.add("contenedor_lista-1");
    checkbox.classList.add("casilla");
    checkbox.setAttribute("type","checkbox");
    parrafo.classList.add("actividad");
    div_boton.classList.add("contenedor_lista-btn");
    button.classList.add("btn-eliminar");

    button.setAttribute("id",id++);

    icono.classList.add("bi","bi-trash3-fill");

    div_todo.appendChild(div_contenedor);
    div_todo.appendChild(div_boton);
    div_contenedor.appendChild(checkbox);
    div_contenedor.appendChild(parrafo);
    button.appendChild(icono);
    div_boton.appendChild(button);

    contenedor_todo.appendChild(div_todo);

    input.value = "";

    function removerTodo(id) {
        document.getElementById(id).parentElement.parentElement.remove();
    }
    button.addEventListener("click", () => {
        removerTodo(button.getAttribute("id"));
    });
}

btn_todo.addEventListener("click", () => {
    if (input.value == "" || input.value.trim() == "") {
        window.alert("campo vacio");
    }else{
        addTodo();
    }
    
});
