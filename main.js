function bienvenida(){
    alert('Bienvenido a Calabozo del cómic');
    let usuario = prompt('Ingrese su usuario');
    while(usuario===''){
        usuario = prompt('Ingrese su usuario')
    }
}
bienvenida();

class Comic{
    constructor(titulo, precio){
        this.titulo = titulo;
        this.precio = Number(precio);
        this.vendido = false;
    }
    vender(){
        this.vendido = true;
    }
    mostrar(){
    return this.titulo + this.precio;
    }
}
const comics = [];
const comic1 = new Comic('Ultimate spiderman #65',360);
const comic2 = new Comic('Batman: The killing joke', 420);
const comic3 = new Comic('X-men: Origins', 415);
const comic4 = new Comic('The walking dead #25', 400);

comics.push(comic1, comic2, comic3, comic4);


console.log(comics);

