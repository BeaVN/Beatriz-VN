import dataCategorias from './datos/categorias.js';
const {categorias} = dataCategorias;

categorias.forEach((categoria)=>{
    const nuevaCategoria = document.createElement('a');
    const contenedorCategorias = document.getElementById("categorias");
    const plantilla= `
    <img class="categoria__img" src="${categoria.imagenPortada}" alt="" />
    <div class="categoria__datos">
        <p class="categoria__nombre">${categoria.nombre}</p>
        <p class="categoria__numero-fotos">${categoria.numeroFotos} Fotos</p>
    </div>

    `;
    nuevaCategoria.innerHTML = plantilla;
    nuevaCategoria.classList.add('categoria');
    nuevaCategoria.href='#';
    nuevaCategoria.dataset.categoria = categoria.id;
    contenedorCategorias.append(nuevaCategoria);
})