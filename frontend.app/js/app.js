
import { getVideojuegos, getVideojuegosById, updateVideojuego, deleteVideojuego } from './api.js';

document.addEventListener('DOMContentLoaded', async () => {
  const videojuegosList = document.getElementById('videojuegos-list');

  const videojuegos = await getVideojuegos();
  videojuegosList.innerHTML = videojuegos.map(videojuegos => `
      <div class="col-xs-12 col-sm-6 col-md-3 card">
        <img class="card-img-top" src="${videojuegos.imgUrl}">
        <div class="card-body d-flex flex-column justify-content-end">
          <h5 class="card-title">${videojuego.name}</h5>
          <p class="card-text">${new Intl.NumberFormat('en-ES', { style: 'currency', currency: 'USD' }).format(product.price)}</p>
          <a onclick="viewVideojuego(${videojuego.id})" class="btn btn-primary">Ver más</a>
        </div>
      </div>
    `).join('');
});

window.viewVideojuego= async (id) => {
  const videojuego = await getVideojuegosById(id);
  const videojuegoDetails = `
    <div class="col">
      <img class="img-fluid" src="${videojuego.imgUrl}">
      <h3>${videojuego.name}</h3>
      <p>${videojuego.description}</p>
      <p>Precio: ${new Intl.NumberFormat('en-ES', { style: 'currency', currency: 'USD' }).format(videojuego.price)}</p>
      <button class="btn btn-warning" onclick="enableEdit(${videojuego.id})">Editar</button>
      <button class="btn btn-danger" onclick="deleteProduct(${videojuego.id})">Eliminar</button>
    </div>
    `;
  document.getElementById('videojuego-list').innerHTML = videojuegoDetails;
};

window.enableEdit = async (id) => {
  const videojuego = await getVideojuegosById(id);
  const editForm = `
    <div class="row gap-3">
      <input type="text" id="name" value="${videoujego.name}">
      <textarea id="description">${videojuego.description}</textarea>
      <input type="number" id="price" value="${videojuego.price}">
      <input type="text" id="imgUrl" value="${videojuego.imgUrl}">
      <button class="btn btn-success" onclick="saveEdit(${id})">Guardar</button>
    </div>
    `;
  document.getElementById('videojuegos-list').innerHTML = editForm;
};

window.saveEdit = async (id) => {
    const updatedvideojuego = {
      name: document.getElementById('name').value,
      description: document.getElementById('description').value,
      price: parseFloat(document.getElementById('price').value),
      imgUrl: document.getElementById('imgUrl').value
    };
    await updateVideojuego(id, updatedVideojuego);
    location.reload();
  };
  
  window.deleteVideojuego= async (id) => {
    await deleteVideojuego(id);
    location.reload(); 
  };
