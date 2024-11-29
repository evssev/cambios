const API_URL = "http://localhost:3000/api/videojuegos";
export const getProducts = async () => {
    const response = await fetch(API_URL);
    return response.json();
  };
  
  
  export const getVideojuegoByID = async (id) => {
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
  };
  
  export const addVideojuego = async (product) => {
    const respone = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(videojuegos)
    });
    return respone.json();
  };
  
  export const updateVideojuego = async (id, product) => {
    const respone = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product)
    });
    return respone.json();
  };
  
  export const deleteVideojuego = async (id) => {
    return fetch(`${API_URL}/${id}`, {
      method: "DELETE"
    });
  };