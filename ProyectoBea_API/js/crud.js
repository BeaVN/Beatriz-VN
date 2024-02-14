/*creamos la siguiente funcion para que se utiliza para crear y configurar un objeto XMLHttpRequest de forma genérica*/
function crearXMLHttpRequest(method, url) {
    var xhttp = new XMLHttpRequest();
    xhttp.open(method, url, true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    return xhttp;
}

/*Creamos una funcion mediante haremos una peticion get a la api y mostraremos los productos dentro de una creditcard
con bootstrap para que se vea más bonito para el usuario*/
function verProducto() {
    const xhr = new XMLHttpRequest();
    const url = 'https://dummyjson.com/products';
    xhr.open('GET', url, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                const products = JSON.parse(xhr.responseText).products;
                const contenedorProducto = document.getElementById('resultadosApi');
                contenedorProducto.innerHTML = '';
                products.forEach(function (product) {
                    const productHTML = `
                        <div class="card" style="width: 16rem; display: inline-block;">
                            <img src="${product.thumbnail}" alt="${product.title}" class="card-img-top">
                            <div class="card-body">
                                <div class="d-flex">
                                    <h6 class="card-title">${product.title}</h6>
                                    <p class="bg-secondary text-white">${product.price}$</p>
                                </div>
                                <p class="card-text">${product.description}</p>
                                <div class="d-flex justify-content-between">
                                    <a href="EditarProducto.html?id=${product.id}" class="btn btn-primary">Modificar</a>
                                    <a href="#" class="btn btn-danger" onclick="eliminarProducto(${product.id})">Eliminar</a>
                                </div>
                            </div>
                        </div>
                    `;
                    contenedorProducto.innerHTML += productHTML;
                });
            } else {
                console.error('Ha habido un error a la hora de cargar los productos, lo sentimos. Estado:', xhr.status);
            }
        }
    };
    xhr.onerror = function () {
        console.error('Hay un error en la red, lo sentimos');
    };
    xhr.send();
}
/*Con esto lo que haremos será crear el DOM el cual vamos a manejar en la funcion de arriba con JavaScript*/
document.addEventListener("DOMContentLoaded", function () {
    verProducto();
});
/*Creamos una funcion donde vamos a coger su id y lo vamos a eliminar de forma ficticia ya que le vamos a mandar la solicitud a la
api y este nos va a mostrar por consola si se ha hecho correctamente o no mediante un 200*/
function eliminarProducto(id) {
    const url = `https://dummyjson.com/products/${id}`;

    const xhr = new XMLHttpRequest();
    xhr.open('DELETE', url, true);

    xhr.onreadystatechange = function () {
        console.log('El estado de la peticion DELETE es el siguiente:', xhr.status);
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                alert('El producto que has seleccionado se ha eliminado correctamente');
            } else {
                console.error('Lo sentimos no hemos podido eliminar el producto que has seleccionado', xhr.status);
            }
        }
    };

    xhr.onerror = function () {
        console.error('Hay un error en la red, lo sentimos.');
    };

    xhr.send();
}

/*Creamos unas funciones donde vamos a validar los campos ya que vamos a verificar si estan vacios o no y tambien lo que vamos
a verificar es si el campo numero no esta vacio y es un numero*/
function isValidSTR(str) {
    return str.trim() !== "";
}

function isValidInt(int) {
    return int.trim() !== "" && Number.isInteger(parseInt(int)) && parseInt(int) > 0;
}

/*Creamos una funcion donde vamos a hacer una peticion de tipo post a la api y esta nos va a devolver un estado de 200 si
todo esta correcto y un estado 404 si es fallida la peticion o si algo falla*/
function añadirProducto() {
    var xhttp = crearXMLHttpRequest("POST", "https://dummyjson.com/products/add");
    var nombre = document.getElementById('nombre').value;
    var descripcion = document.getElementById('descripcion').value;
    var precio = document.getElementById('precio').value;
    var stock = document.getElementById('stock').value;
    const ProductoNuevo = {
        title: isValidSTR(nombre),
        description: isValidSTR(descripcion),
        price: isValidInt(precio),
        stock: isValidInt(stock)
    };
    const jsonProducto = JSON.stringify(ProductoNuevo);

    xhttp.onload = function () {
        if (xhttp.status == 200 && xhttp.readyState == 4) {
            alert("El producto se ha añadido correctamente a la API");
            console.log('La solicitud de tipo POST se ha realizado correctamente. Estado:', xhttp.status);
            verProducto();
        } else {
            console.log('Ha habido un error a la hora de cargar de añadir el producto, lo sentimos. Estado:', xhttp.status);
        }
    };

    xhttp.onerror = function () {
        alert('Hay un error en la red, lo sentimos');
    };

    xhttp.send(jsonProducto);
}

/*Creamos una funcion donde vamos a cargar los datos del producto que 
hayamos seleccionado por su id*/
function cargarDatosEditarProducto(id) {
    const url = `https://dummyjson.com/products/${id}`;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                const producto = JSON.parse(xhr.responseText);
                informacionNuevaProducto(producto);
            } else {
                console.log('Ha habido un error a la hora de cargar de añadir el producto, lo sentimos. Estado:', xhr.status);
            }
        }
    };

    xhr.onerror = function () {
        console.error('Hay un error en la red, lo sentimos. Estado: ', xhr.status);
    };

    xhr.send();
}

/*Creamos una funcion donde vamos a guardar los cambios que realice el usuario 
en el formulario de editar producto*/
function informacionNuevaProducto(producto) {
    document.getElementById('title').value = producto.title;
    document.getElementById('description').value = producto.description;
    document.getElementById('price').value = producto.price;
    document.getElementById('stock').value = producto.stock;
}

/*Creamos una funcion que llamaremos cuando le demos al boton de Modificar
esta lo que hara será irse a donde este la informacio relacionada con el producto
y lo que haremos despues dependiendo de lo que se cumpla del if le decimos que 
obtenga el id del producto o que envie la peticion a la API*/
function editarProducto() {
    const formData = new FormData(document.getElementById('formularioProducto'));
    const productoEditado = {};

    for (const [key, value] of formData.entries()) {
        productoEditado[key] = value;
    }

    const id = obtenerIdProducto();
    if (id) {
        enviarPeticionActualizarProducto(id, productoEditado);
    } else {
        console.error('No se ha encontrado ningun id de la API igual');
    }
}

/*creamos una funcion para obtener los id de los productos para poder editarlos
en dicha funcion lo que haremos ser encontrarlos por la urlParams*/
function obtenerIdProducto() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

/*creamos una funcion donde le vamos a enviar a la api la peticion PUT
y esta nos va adevolver un 200 en caso de true y un 400 en caso de que la 
peticion a la API no sea válida*/
function enviarPeticionActualizarProducto(id, productoEditado) {
    const url = `https://dummyjson.com/products/${id}`;
    const xhr = new XMLHttpRequest();
    xhr.open('PUT', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                console.log('La solicitud de tipo PUT se ha realizado correctamente. Estado:', xhr.status);
                alert("El producto se ha actualizado correctamente.");
            } else {
                console.error('Ha habido un error a la hora de editar el producto, lo sentimos. Estado:', xhr.status);
                if (xhr.status !== 200) {
                    alert("Lo sentimos ha habido un error a la hora de editar el producto");
                }
            }
        }
    };

    xhr.onerror = function () {
        alert('Hay un error en la red, lo sentimos');
    };

    xhr.send(JSON.stringify(productoEditado));
}

/*Le asignamos un evento al DOM para que se quede escuchando cuando le damos al boton*/
document.addEventListener('DOMContentLoaded', function () {
    const id = obtenerIdProducto();
    if (id) {
        cargarDatosEditarProducto(id);
    } else {
        console.error('El id no se encuentra en la API, lo sentimos');
    }

    const botonEditar = document.getElementById('botonEditar');
    if (botonEditar) {
        botonEditar.addEventListener('click', editarProducto);
    }
});
