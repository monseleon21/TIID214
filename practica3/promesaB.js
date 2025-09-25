function verificarUsuario(usuario){
    return new Promise((resolver, rechazar) =>{
        if (usuario === "admin"){

            resolver("acceso concedido");
        }
            else{
                rechazar("acceso denegado");
            }
    }); 


}

verificarUsuario("Maria")
.then(res => console.log(res))
.catch(err => console.log(err));

verificarUsuario("Monchis")
.then(res => console.log(res))
.catch(err => console.log(err));