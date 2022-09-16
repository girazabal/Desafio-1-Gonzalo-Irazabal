function bienvenida(){
    alert('Bienvenido a Calabozo del cómic');
    let usuario = prompt('Ingrese su usuario');
    while(usuario===''){
        usuario = prompt('Ingrese su usuario')
    }
}
bienvenida();

class Comic{
    constructor(titulo, precio, id){
        this.titulo = titulo;
        this.precio = Number(precio);
        this.vendido = false;
        this.id=id;
    }
    vender(){
        this.vendido = true;
    }
    mostrar(){
    return this.id+' '+this.titulo+' $'+this.precio+'\n';
    }
    textoCompra(){
        return 'El comic seleccionado es '+this.titulo+'\nSu precio es de $ '+this.precio;
    }
}
const comics = [];
const comic1 = new Comic('Ultimate spiderman #65',360,1);
const comic2 = new Comic('Batman: The killing joke', 420,2);
const comic3 = new Comic('X-men: Origins', 415,3);
const comic4 = new Comic('The walking dead #25', 400,4);

comics.push(comic1, comic2, comic3, comic4);

function obtenerComics() {
    let misComics = 'Ingrese el numero de comic que desea adquirir \n';
    for (const comic of comics) {
        misComics = misComics + comic.mostrar();
    }
    return misComics;
}
let comicExitoso = false;

ingresarComics();

if(comicExitoso == false){
    alert('No existe el comic ingresado');
    ingresarComics();
}

function ingresarComics(){
    let numeroIngresado=Number (prompt(obtenerComics()));
    comics.forEach(comic => {
        if(comic.id===numeroIngresado){
            comicExitoso=true;
            alert(comic.textoCompra());
        }
    });
}

console.log(comics);

