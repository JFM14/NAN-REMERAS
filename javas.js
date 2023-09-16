// información sobre las remeras
const remeras = [
    { nombre: "Remera 1", precio: 2500 },
    { nombre: "Remera 2", precio: 3000 },
    { nombre: "Remera 3", precio: 4000 },
    { nombre: "Remera 4", precio: 5000 },
];

// botones "Comprar"
const botonesComprar = document.querySelectorAll("button[data-precio]");

//  mostrar el total
const totalElemento = document.getElementById("total");

let totalCompra = 0;

// calcular el total y mostrarlo
function calcularTotal() {
    totalCompra = 0;
    botonesComprar.forEach((boton) => {
        if (boton.classList.contains("seleccionado")) {
            const precio = parseFloat(boton.getAttribute("data-precio"));
            totalCompra += precio;
        }
    });
    totalElemento.textContent = `Total: $${totalCompra.toFixed(2)}`;
}

// evento click botón "Comprar"
botonesComprar.forEach((boton) => {
    boton.addEventListener("click", () => {
        boton.classList.toggle("seleccionado");
        calcularTotal();
    });
});

// acción según la opción seleccionada
function realizarAccion(opcion) {
    switch (opcion) {
        case "opcion1":
            console.log("acción para la Opción 1");
            break;
        case "opcion2":
            console.log("acción para la Opción 2");
            
            break;
        case "opcion3":
            console.log("acción para la Opción 3");
            
            break;
        default:
            console.log("Opción no válida");
    }
}


