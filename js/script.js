const productos=[
  {
    id:"Camiseta01",
    titulo:"Camiseta01",
    imagen:"./img/camiseta-1.jpg",
    precio:"35000",
  },
  {
    id:"Camiseta02",
    titulo:"Camiseta02",
    imagen:"./img/camiseta-2.jpeg",
    precio:"35000",
  },
  {
    id:"Camiseta03",
    titulo:"Camiseta03",
    imagen:"./img/camiseta-3.jpeg",
    precio:"35000",
  },
  {
    id:"Camiseta04",
    titulo:"Camiseta04",
    imagen:"./img/camiseta-6.jpeg",
    precio:"35000",
  },
];
//voy a declarar todos las constantes del DOM.
const contenedorDeProductos = document.getElementById("ContenedorProductos");

function agregarProducto(){
  //se van a agregar los productos en el html
  productos.forEach(producto =>{
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML =`
      <img src="${producto.imagen}" alt="${producto.titulo}">
      <div class="detalles-prod">
        <h3 class="producto">${producto.titulo}</h3>
        <p class="precio-prod">$${producto.precio}</p>
        <button class="agregar-prod" id =${producto.id}>Agregar</button>
      </div> 
    `;
    contenedorDeProductos.append(div);

  })
}

agregarProducto(productos);

