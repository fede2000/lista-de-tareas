const dateNumber = document.getElementById('dateNumber'); /* obtenemos el numero del dia actual */
const dateText = document.getElementById('dateText'); /*  obtenemos el dia de la semana actual */
const dateMonth = document.getElementById('dateMonth'); /*  obtenemos el mes */
const dateYear = document.getElementById('dateYear');


// Task Container contenedor de tareas

const tasksContainer = document.getElementById('tasksContainer');

const setDate = () => {
    const date = new Date(); 
    dateNumber.textContent = date.toLocaleString('es',{day: 'numeric'}); /* el contenido del elemento id va a ser igual a ... */
    dateText.textContent = date.toLocaleString('es', {weekday: "long"})
    dateMonth.textContent = date.toLocaleString('es', {month: 'short'})
    dateYear.textContent = date.toLocaleString('es', {year: 'numeric'})
};


const addNewTask = event => {
    event.preventDefault(); /* con esto evitamos que el form nos lleve a otra pagina cuando haga el submmit */
    const { value } = event.target.taskText; /*  con esto obtenemos el valor del input con el name "taskText" */
    if(!value) return;

    const task = document.createElement('div'); /*  creamos un div que se guarda en task */
    task.classList.add('task','roundBorder');
    task.addEventListener('click',changeTaskState) /*  cuando hgamos click en el div se agregara el evento */
    task.textContent = value; /*  agregamos el valor que el usuario agrego en el input */
    tasksContainer.prepend(task); /* y agregamos la tarea al principio del contenedor de tareas */
    event.target.reset();
};

const changeTaskState = event => {
    event.target.classList.toggle('done');
};

const order = () =>{
    const done = []; /* array con tareas hechas */
    const toDo = []; /*  array con las tareas por hacer */

    tasksContainer.childNodes.forEach( el => {
        el.classList.contains('done') ? done.push(el) : toDo.push(el); /* si tiene la clase done agregamos en el array done, si no tiene la clase done agregamos en el array toDo */

    })
    return[...toDo, ...done];
}

const renderOrderedTask = () => {
    order().forEach(el => tasksContainer.appendChild(el));
}


setDate()