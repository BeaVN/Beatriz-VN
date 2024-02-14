import cerrarGaleria from './cerrarGaleria.js';
import slideClick from './slideClick.js';
import { cargarAnteriorSiguiente } from './cargarImagen.js';
import carousel from "./carousel.js";
const galeria = document.getElementById('galeria');

galeria.addEventListener('click', (e) =>{
    const boton = e.target.closest('button');
    if(boton?.dataset?.accion === 'cerrar-galeria'){
     
    cerrarGaleria();
    }   
    if(e.target.dataset.id){
        slideClick(e);
    }

    if(boton?.dataset?.accion === 'siguiente-imagen'){
        
        cargarAnteriorSiguiente('siguiente');
    }
    if(boton?.dataset?.accion === 'anterior-imagen'){
        
        cargarAnteriorSiguiente('anterior');
    }
    if(boton?.dataset?.accion === 'siguiente-slide'){
        
        carousel('adelante');
    }
    if(boton?.dataset?.accion === 'anterior-slide'){
        
        carousel('atras');
    }     
});
