import data from '../datos/fotos.js';
const cargarImagen = (id, nombre, ruta, descripcion) => {
  const galeria = document.getElementById('galeria');
  galeria.querySelector('.galeria__imagen').src = ruta;
  galeria.querySelector('.galeria__titulo').innerText = nombre;
  galeria.querySelector('.galeria__descripcion-imagen-activa').textContent = descripcion;
  galeria.querySelector('.galeria__imagen').dataset.idImagen = id;

  const categoriaActual = galeria.dataset.categoria;
  const fotos = data.fotos[categoriaActual];
  let indexImagenActual;

  fotos.forEach((foto, index)=>{
    if(foto.id === id){

        indexImagenActual = index;
     
        const slides = galeria.querySelectorAll('.galeria__carousel-slide');
        slides.forEach((slide)=>{
            slide.classList.remove('galeria__carousel-slide--active');
        });
       
     
      
    }

});

if(galeria.querySelectorAll('.galeria__carousel-slide').length>0){

    galeria.querySelectorAll('.galeria__carousel-slide')[indexImagenActual].classList.add('galeria__carousel-slide--active');
}
};

const cargarAnteriorSiguiente = (direccion)=> {
    const categoriaActual = galeria.dataset.categoria;
    const fotos = data.fotos[categoriaActual];
    const idImagenActual = parseInt(galeria.querySelector('.galeria__imagen').dataset.idImagen);
    let indexImagenActual;
    fotos.forEach((foto, index)=>{

        if(foto.id ===idImagenActual){
            indexImagenActual = index;
        }

    });
    if(direccion === 'siguiente'){
        if(fotos[indexImagenActual + 1]){
            const {id, nombre,ruta,descripcion}= fotos[indexImagenActual + 1];
            cargarImagen(id,nombre,ruta,descripcion);

        }
   
    }else if(direccion === 'anterior'){

        if(fotos[indexImagenActual - 1]){
            const {id, nombre,ruta,descripcion}= fotos[indexImagenActual - 1];
            cargarImagen(id,nombre,ruta,descripcion);

        }
    }
}
export { cargarImagen, cargarAnteriorSiguiente};