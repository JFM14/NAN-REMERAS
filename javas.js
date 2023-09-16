//Funciones
//function pedirNombre(){
  // let nombreIngresado = prompt("Ingrese su nombre :D") 
   //console.log(nombreIngresado)
//}

//pedirNombre()
function seleccionarremera() {
    let remera1 = 2500
    let remera2 = 3000
    let remera3 = 4000
    let remera4 = 5000

    function sumar(remera1, remera2) {
        let resultado = remera1 + remera2
        console.log(resultado)
      }
    
      sumar(remera1, remera2)
    }
    
    seleccionarremera()

// Obtén todos los botones "Comprar"
const botonesComprar = document.querySelectorAll("button[data-precio]")

// Elemento donde se mostrará el total
const totalElemento = document.getElementById("total")

let totalCompra = 0

// Agrega un evento click a cada botón "Comprar"
botonesComprar.forEach((boton) => {
    boton.addEventListener("click", () => {
        const precio = parseFloat(boton.getAttribute("data-precio"))
        
        // Verifica si el botón está marcado o desmarcado
        if (boton.classList.contains("seleccionado")) {
            totalCompra -= precio;
            boton.classList.remove("seleccionado");
            console.log(`Deseleccionado: -$${precio.toFixed(2)}`)
        } else {
            totalCompra += precio;
            boton.classList.add("seleccionado");
            console.log(`Seleccionado: +$${precio.toFixed(2)}`)
        }

        // Actualiza el elemento de total
        totalElemento.textContent = `Total: $${totalCompra.toFixed(2)}`
        console.log(`Total actual: $${totalCompra.toFixed(2)}`)
    })
})
