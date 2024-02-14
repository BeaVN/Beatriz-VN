function login() {
    const usuarioIntroducido = document.getElementById("usuario").value;
    const contraseñaIntroducida = document.getElementById("contraseña").value;
    let credencialCorrecta = false;

    fetch('/js/login.json')
    .then(response => response.json())
    .then(data => {
        data.usuarios.forEach(usuario => {
            if (usuario.usuario === usuarioIntroducido && usuario.contraseña === contraseñaIntroducida) {
                alert("La sesión se ha iniciado correctamente.");
                window.location.href = "Principal.html";
                credencialCorrecta = true;
            }
        });
        
        if(!credencialCorrecta){
            alert("Lo sentimos el usuario o contraseña que has introducido no es correcto, prueba otra vez.");
        document.getElementById("usuario").value = "";
        document.getElementById("contraseña").value = "";
        }
        
    }
    ).catch(error => console.error('Ha habido un error a la hora de cargar el JSON', error));
}