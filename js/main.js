let interes = 0;
const carrito = [];
const productosDelCarrito = []

function calcularPrecioFinal(importeSinInteres, cantCuotas) {
  let precioFinal;
  if (cantCuotas == 1) {
    interes = 0;
    precioFinal = importeSinInteres;         
  } else if (cantCuotas == 3) {
    interes = 30;
    precioFinal = importeSinInteres * ((interes+100)/100);        
  } else {
    interes = 40;
    precioFinal = importeSinInteres * ((interes+100)/100);
  }

  return parseFloat(precioFinal).toFixed(2);

}

const form = document.getElementsByClassName('needs-validation')[0]

form.addEventListener('submit', event => {
  event.preventDefault()
  event.stopPropagation()

  form.classList.add('was-validated')

  if (form.checkValidity()) {
    const nombre = document.getElementById('nomyape').value
    const producto = document.getElementById('producto').value
    const importe = document.getElementById('importe').value
    const cuotas = document.getElementById('cuotas').value
    const precioFinal = calcularPrecioFinal(importe, cuotas)

    const compra = {
      id: carrito.length + 1,
      nombre,
      producto,
      importe,
      cuotas,
      precioFinal,
      interes
    }

    carrito.push(compra)
    guardarProductoLS(compra)

    alert(`Según el método de pago elegido, el importe final es de $${precioFinal} a pagar en ${cuotas} pago/s. El interés es de ${interes}%. El valor de la cuota es $${(precioFinal/cuotas).toFixed(2)}`)

  }
}, false)

function guardarProductoLS(producto) {
  localStorage.setItem("producto", producto)
}

function cargarProductoLS() {
  return JSON.parse(localStorage.getItem("producto")) || []
}

function renderProductos() {
  const producto = cargarProductoLS();
}

console.log(carrito)