const fechaNumero=document.getElementById("fechaNumero")
const fechaMes = document.getElementById("fechaMes")
const fechaAño= document.getElementById("fechaAño")
const fechaweekday= document.getElementById("fechaDiaDerecha")

const cajaDeTareas= document.getElementById("cajaDeTareas")

function ponerDiaInformacion (){
    let date=new Date();
    fechaNumero.textContent=date.toLocaleString("es-ES",{day:"numeric"})
    fechaMes.textContent=date.toLocaleString("es-ES",{month:"short"})
    fechaAño.textContent=date.toLocaleString("es-ES",{year:"numeric"})
    fechaweekday.textContent=date.toLocaleString("es-ES",{weekday:"long"})
    console.log()
}

function añadirTarea(event){
    event.preventDefault();
    let {value} = event.target.tareaTexto ;//es una referencia al objeto en el que se produjo el evento
    if(!value) return; //declaramos primero que valor lo recojamos de tareaTexto, que es en donde se produjo el evento para luego realizar el if y decir : si no hay un valor en value regresa sin nada y asi que no haga nada si tarea texto esta vacio.
    let tarea = document.createElement("div");
    tarea.classList.add("border","tarea");
    tarea.addEventListener("click",cambiarEstado);
    tarea.textContent =value //dice que el valor de tarea sea de value
    cajaDeTareas.prepend(tarea);
    event.target.reset();
}

function cambiarEstado (event){
    event.target.classList.toggle("hecha");
}

function ordenartareas (){
    let tareasHechas=[];
    let tareasporHacer=[];

    cajaDeTareas.childNodes.forEach( element => { element.classList.contains("hecha") ? tareasHechas.push(element) : tareasporHacer.push(element)})

    return [...tareasporHacer,...tareasHechas]
}

function ordenar(){
    ordenartareas().forEach(element => cajaDeTareas.appendChild(element))
}




ponerDiaInformacion();