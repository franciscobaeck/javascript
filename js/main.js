

let importeSinInteres = parseInt(prompt("ingrese el importe sin interés"));
let interes=0;


console.log("importe sin interes", importeSinInteres)
while (isNaN(importeSinInteres)==true || importeSinInteres == null || importeSinInteres == "" ){
  importeSinInteres = prompt("ingresar un número y no un caracter como importe sin interés");
}
console.log("importe sin interes", importeSinInteres)

  let cantCuotas = parseInt((prompt("ingrese cantidad de cuotas")));

  while (cantCuotas !== 1 && cantCuotas !== 3 && cantCuotas !== 6) {
    if (isNaN(cantCuotas)==true) {
      cantCuotas = parseInt(prompt("ingrese un número y no un caracter para cantidad de cuotas"));  
    }
    else {
      cantCuotas = parseInt(prompt("No disponemos de esa cantidad de cuotas, ingrese nuevamente"));
    }
  }

  function PrecioFinal (importeSinInteres,cantCuotas){

    if (cantCuotas == 1) {
      interes=0;
      return importeSinInteres;      
            
    } else if (cantCuotas == 3) {
      interes=30;
      return importeSinInteres * ((interes+100)/100);        
    } else {
      interes=40;
      return importeSinInteres * ((interes+100)/100);
    }  
  }

  console.log(PrecioFinal(importeSinInteres,cantCuotas))

  alert("Según el método de pago elegido, el importe final es de $"+ PrecioFinal (importeSinInteres,cantCuotas)+" a pagar en "+ cantCuotas+" pago/s. El interés es de "+ interes+"%. El valor de la cuota es $"+ PrecioFinal (importeSinInteres,cantCuotas)/cantCuotas)

  const compra = {interes: interes, cuotas:cantCuotas, total:PrecioFinal(importeSinInteres,cantCuotas)};

  //Guardo la compra en un objeto
  console.log(compra)