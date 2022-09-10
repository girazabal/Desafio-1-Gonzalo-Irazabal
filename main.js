//Desafio entregable simulador interactivo

function bienvenida(){
    alert('Bienvenido a Calabozo del cómic');
    let usuario = prompt('Ingrese su usuario');
    while(usuario===''){
        usuario = prompt('Ingrese su usuario')
    }
}

function catalogoComics(){
    let comic;
    do {
    comic = prompt('Ingrese el comic que desee adquirir: \n1-Ultimate spiderman #65\n2-Batman Killing joke\n3-X-men Origins\n4-The walking dead #25');
    }while (comic!=1 && comic!=2 && comic!=3 && comic!= 4);
    console.log(comic)
    switch(comic){
        case '1':
            return 'Ultimate spiderman #65';
        case '2':
            return 'Batman Killing joke';
        case '3':
            return 'X-men Origins';
        case '4':
            return 'The walking dead #25';
    }
}

function precio(comic){
    if (comic ==='Ultimate spiderman #65'){
    return 320;
    }else if (comic ==='Batman Killing joke'){
        return 450;
    }else if(comic ==='X-men Origins'){
        return 415;
    }else if(comic === 'The walking dead #25'){
        return 400;
    }
}

function cobro(comic, precio){
    alert('El comic seleccionado es: '+comic+'.\nEl precio a abonar es de $ '+precio+'.');
}
bienvenida();
precio();
comic = catalogoComics();
let precioComic = precio(comic);
cobro(comic, precioComic);
console.log(precioComic);