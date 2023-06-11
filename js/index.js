const tabla = document.querySelector('#Lista tbody');

function cargar(){
    fetch('http://www.raydelto.org/agenda.php')
      .then(respuesta => respuesta.json())
      .then (usuarios => {
         usuarios.forEach(usuario => {
            tr = document.createElement('tr');
            tr.innerHTML += `
            <td>${usuario.nombre}</td>
            <td>${usuario.apellido}</td>
            <td>${usuario.telefono}</td>
            `;
            document.getElementById('bod').appendChild(tr);
        });
    })
}

cargar();

function subir() {

const nuevoContacto = {
    nombre: "John",
    apellido: "Doe",
    telefono: "1234567890"
  };
  
  fetch("http://www.raydelto.org/agenda.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(nuevoContacto)
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    });
  
}

setTimeout(subir(), 3000);