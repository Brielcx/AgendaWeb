const tabla = document.querySelector('#Lista tbody');

function cargar(){
    fetch('https://railway-node-express-production-3b13.up.railway.app/scrape')
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
    nombre: "Jose",
    apellido: "Gabriel",
    telefono: "1234567890"
  };
  
  fetch("https://railway-node-express-production-3b13.up.railway.app/contacts", {
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