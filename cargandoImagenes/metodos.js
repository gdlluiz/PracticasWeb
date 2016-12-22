//
var d = document.getElementById("laVilla");
var tapiz = d.getContext("2d");

//creo elementos de la villa con atributos
var fondo="tile.png", pollo="pollo.png", cerdo="cerdo.png", vaca="vaca.png";
var elMapa = {
  url:  fondo,
  cargaOk:  false,
  alto: 500,
  ancho:  500
};
var elPollo = {
  url:  pollo,
  cargaOk:  false,
  alto: 80,
  ancho:  80
};
var elCerdo ={
  url:  cerdo,
  cargaOk:  false,
  alto: 80,
  ancho:  80
};
var laVaca = {
  url:  vaca,
  cargaOk: false,
  alto: 80,
  ancho:  80
};

// creo las instancias de los elementos de la villa
//mapa
elMapa.imagen = new Image();
elMapa.imagen.src=elMapa.url;
elMapa.imagen.addEventListener("load", cargarFondo);
//cerdo
elCerdo.imagen = new Image();
elCerdo.imagen.src =elCerdo.url;
elCerdo.imagen.addEventListener("load", cargarCerdo);
//pollo
elPollo.imagen = new Image();
elPollo.imagen.src = elPollo.url;
elPollo.imagen.addEventListener("load", cargarPollo);
//vaca
laVaca.imagen = new Image();
laVaca.imagen.src = laVaca.url;
laVaca.imagen.addEventListener("load", cargarVaca);

//funcion que genera numeros aleatorios

function alearorio(min, max){
  var resultado;
  resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  return resultado;
}

// creo funciones que verifican que se cargaron los elementos
// verifico mapa
function cargarFondo(){
  elMapa.cargaOk = true;
  dibujar();
}
//verifico cerdo
function cargarCerdo(){
  elCerdo.cargaOk = true;
  dibujar();
}
//verifico pollo
function cargarPollo(){
  elPollo.cargaOk = true;
  dibujar();
}
//verifico vaca
function cargarVaca(){
  laVaca.cargaOk = true;
  dibujar();
}


//funcion que dibuja elementos utilizando los atributos de las variables
function dibujar(){
  // dibuja mapa
  if(elMapa.cargaOk == true){
      tapiz.drawImage(elMapa.imagen, 0, 0);
  }
  //dibuja cerdo
  if(elCerdo.cargaOk == true){
    var lim = alearorio(0,10);
    for(var i =0; i<lim; i++){
      var x = alearorio(0, (elMapa.ancho - elCerdo.ancho));
      var y = alearorio(0, (elMapa.alto - elCerdo.alto ));
      tapiz.drawImage(elCerdo.imagen, x, y);
    }
  }
  //dibuja pollo
  if(elPollo.cargaOk == true){
    var lim = alearorio(0,10);
    for(var i =0; i<lim; i++){
      var x = alearorio(0, (elMapa.ancho - elPollo.ancho));
      var y = alearorio(0, (elMapa.alto - elPollo.alto ));
      tapiz.drawImage(elPollo.imagen, x, y);
    }
  }
  //dibuja vaca
  if(laVaca.cargaOk == true){
    var lim = alearorio(0,10);
    for(var i =0; i<lim; i++){
      var x = alearorio(0, (elMapa.ancho - laVaca.ancho));
      var y = alearorio(0, (elMapa.alto - laVaca.alto ));
      tapiz.drawImage(laVaca.imagen, x, y);
    }
  }

}
