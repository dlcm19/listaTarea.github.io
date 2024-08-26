const inputTitulo = document.querySelector(".inputTitulo");
const textDescripcion = document.querySelector(".textDescripcion");
const inputFecha = document.querySelector(".inputFecha");
const btnBuscar = document.querySelector(".btnBuscar");
const btnAgregar = document.querySelector(".btnAgregar");
const formulario = document.querySelector(".formulario");
const mensaje = document.querySelector(".mensaje");
const containerLista = document.querySelector(".containerLista");
const inputBuscar = document.querySelector(".inputBuscar");


function agregar() {

    // Crear un contenedor para la tarea (puede ser un <li> o <div>)
    const tarea = document.createElement('li');
    //tarea.setAttribute("class", "prueba");
    // Crear los elementos individuales
    const li1 = document.createElement('span');
    li1.innerHTML = `${inputTitulo.value}`;
    
    const li2 = document.createElement('span');
    li2.innerHTML = `${textDescripcion.value}`;
    li2.setAttribute("contentEditable", "false");
    li2.setAttribute("class", "descripcion");
    
    const li3 = document.createElement('span');
    li3.innerHTML = `${inputFecha.value}`;
    
    const imgEditar = document.createElement('img');
    imgEditar.src = 'pen-to-square-solid.svg';
    
    const imgEliminar = document.createElement('img');
    imgEliminar.src = 'trash-solid.svg';
    
    const inputCheckBox = document.createElement('input');
    inputCheckBox.type = 'checkbox';
    inputCheckBox.setAttribute("class", "check");
    
    
    imgEliminar.addEventListener('click', function() {
        tarea.remove(); 
    });
    
    imgEditar.addEventListener('click', function() {

            li2.contentEditable="true";
            li2.focus();
        

         li2.addEventListener("blur", () =>{
            li2.contentEditable="false"
         })
         
    });

    inputCheckBox.addEventListener('change', function(){
        tarea.classList.toggle('prueba_visible')
    
    });
       
      tarea.appendChild(li1);
      tarea.appendChild(li2);
      tarea.appendChild(li3);
      tarea.appendChild(imgEditar);
      tarea.appendChild(imgEliminar);
      tarea.appendChild(inputCheckBox);
      
      containerLista.appendChild(tarea);
     //console.log(containerLista)

     inputBuscar.addEventListener('input', function(){
        const termino = inputBuscar.value.toLowerCase()
        buscartareas(termino)
    })
    
     function buscartareas(termino) {
        const tareas = containerLista.getElementsByTagName('li');

    Array.from(tareas).forEach(tarea => {
        const descripcion = tarea.querySelector('span').textContent.toLowerCase();
        
        if (descripcion.includes(termino)) {
            tarea.style.display = '';
        } else {
            tarea.style.display = 'none';
        }
    });
     }
      
    }

    function limpiar() {
        inputTitulo.value="";
        textDescripcion.value="";
        inputFecha.value="";
        inputTitulo.focus();
        
        mensaje.textContent = "";
    }
    
    formulario.addEventListener("submit", function (e) {
        e.preventDefault()
        if(!inputFecha.value && !textDescripcion.value && !inputTitulo.value){
            mensaje.textContent="Debe llenar todos los campos";
        } else if (!inputTitulo.value) {
            mensaje.textContent="Debe ingresar un título";
        } else if(!textDescripcion.value){
            mensaje.textContent="Debe ingresar una descripción";
        } else if (!inputFecha.value) {
            mensaje.textContent="Debe ingresar una fecha";
        } else {
            agregar()
            limpiar()
        }
        
})



function eliminar(e){  
e.remove()
}



