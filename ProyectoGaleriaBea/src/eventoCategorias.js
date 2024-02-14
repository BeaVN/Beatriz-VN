import dataFotos from './datos/fotos.js';
import { cargarImagen } from './galeria/cargarImagen.js';

const contenedorCategorias = document.getElementById('categorias');
const galeria = document.getElementById('galeria');

contenedorCategorias.addEventListener('click', (e) =>{

    if(e.target.closest('a')){

        const categoriaActiva = e.target.closest('a').dataset.categoria;
        const fotos = dataFotos.fotos[categoriaActiva];
        const carousel = galeria.querySelector('.galeria__carousel-slides');
        galeria.dataset.categoria = categoriaActiva;
        carousel.innerHTML='';

fotos.forEach((foto)=>{

    const slide = `<a href="#" class="galeria__carousel-slide">
                    <img class="galeria__carousel-image" src="${foto.ruta}" data-id="${foto.id}" alt="" />
                   </a>`
            galeria.querySelector('.galeria__carousel-slides').innerHTML += slide;
            galeria.querySelector('.galeria__carousel-slide').classList.add('galeria__carousel-slide--active');
         
});
const {id,nombre,ruta,descripcion} = fotos[0];
    cargarImagen(id,nombre,ruta,descripcion);
    galeria.classList.add('galeria--active');
        document.body.style.overflow="hidden";
    };
})