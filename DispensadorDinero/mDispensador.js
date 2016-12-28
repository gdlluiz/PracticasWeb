class Billete {
  constructor(val, cant)
  {
    this.valor = val;
    this.cantidad = cant;
  }
}

var entregado = []; // almacenaro el dinero entregado al usuario
var caja = []; //contendra la cantidad de dinero en el cajero
var dinero = 0;// lacantidad de dinero a surtir
var div = 0;
var papeles = 0;
var res = document.getElementById("resultado");
// ejecuto metodo extraerDinero al hacer click en el boton
var billete = document.getElementById("extraer");
billete.addEventListener("click", entregarDinero);

// ingreso billete y cantidad  a la caja
caja.push(new Billete(500, 5));
caja.push(new Billete(200, 3));
caja.push(new Billete(100, 2));



//metodos

//entregar dinero
function entregarDinero()
{
  var money = document.getElementById("dinero");
  dinero = parseInt( money.value);
  for(var billete of caja)
  {
    if (dinero > 0)
    {
      div = Math.floor(dinero/billete.valor );
      if (div > billete.cantidad)
      {
        //si la division  es mayor  a la cantidad de billetes
        //tomo todos los billetes
        papeles = billete.cantidad;
      }
      else
      {
        //si es menor  tomo los billetes que necesito
          papeles = div;
      }
      //paso los billetes obtenidos a la variable entregado
      entregado.push(new Billete(billete.valor, papeles));
      //resto el dinero entregado al total de dinero por entregar
      dinero -= (billete.valor * papeles);
    }

  }
  if(dinero > 0)
  {
    res.innerHTML = "Fondos insuficientes";
  }
  else{
    for(var e of entregado)
    {
      if(e.cantidad > 0)
      {
      // concateno para que muestre todos los resultados
      res.innerHTML += (e.cantidad + " billetes de $" + e.valor + "<br />");
    }
    }
  }

}
