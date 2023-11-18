const registro = document.getElementById("registro")

const databtn = document.querySelector("[data-btn]")


const  listaUser = []
document.addEventListener('DOMContentLoaded', () => {
        const form = document.getElementById('person-form');
        const table = document.getElementById('person-table');
        const tbody = table.querySelector('tbody');
    
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const nombre = document.getElementById('nombre').value;
            const apellido = document.getElementById('apellido').value;
            const telefono = document.getElementById('telefono').value;
            const direccion = document.getElementById('direccion').value;
            const email = document.getElementById('email').value;
            const pais = document.getElementById('pais').value;
            const descripcion = document.getElementById('descripcion').value;
    
            // Crear una nueva fila en la tabla
            const newRow = document.createElement('tr');
           
            newRow.innerHTML = ` 
                <td>${nombre}</td>
                <td>${apellido}</td>
                <td>${telefono}</td>
                <td>${direccion}</td>
                <td>${email}</td>
                <td>${pais}</td>
                <td>${descripcion}</td>
                <td class="btnbotones">
                  
                   <button class="delete"  > Eliminar</button> 
                </td>
            `;
            newRow.style.color="yellow"
      
            tbody.appendChild(newRow);
    
            // Limpiar el formulario
            form.reset();
            listaUser.appendChild(tbody)
        });
    
        tbody.addEventListener('click', (e) => {
            if (e.target.classList.contains('delete')) {
                // Eliminar la fila
                const row = e.target.parentElement.parentElement;
                tbody.removeChild(row);
            } else if (e.target.classList.contains('edit')) {
                // Editar la fila (puedes implementar la edición aquí)
                alert('Funcionalidad de edición no implementada aún.');
            }
        });
    });
    



      
                
        


const datos__registro = document.getElementById("datos")
const persontable = document.getElementById("person-table")
const ocultarform = document.getElementById("ocultarform")

datos__registro.addEventListener("click",(e)=>{
        e.preventDefault()
        
       
          
        
        

        if (persontable.style.display === "none") {
                persontable.style.display = "inline"
                
                ocultarform.style.display = "none"
                datos__registro.textContent="Registro"
                datos__registro.style.color="blue"
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Datos registrados',
                    showConfirmButton: false,
                    timer: 3500
                  })

            }     
       else {
                persontable.style.display = "none"
                ocultarform.style.display = "inline"
               
                
        }
      

})

