/* De nuestros productos (los que hemos metido a mano en la bbdd), sacarlos por pantalla*/
function init() {
  fetch("http://localhost:8000/productos"
  )
    .then((response) => 
      response.json()
    )
    .then((data) => {
      let resultado = document.getElementById("container");
      for (let result of data) {
        resultado.innerHTML += `
        <div class="col-3">
          <div class="card">
            <img
              src="../assets/images/PRIMERA TARJETA.avif"
              class="card-img-top"
              alt="Productos"
            />
            <div class="card-body">
              <div class="d-flex justify-content-between">
                <h5  class="card-title">${result.nombredelproducto}</h5>
                <span 
                  >${result.precio}<i class="bi bi-currency-euro text-primary"></i
                ></span>
              </div>
            
              <p class="card-text">
               ${result.detallesdelproducto} La mayor selección de Metros, de diferentes texturas, diferentes colores y diferentes tamaños.
              </p>
              <div class="d-flex gap-2">
                <a href="#" class="btn btn-primary">Detalles</a>
                <a onclick="buttonClick('metro-product')" href="#" class="btn btn-warning w-100">Comprar</a>
               
              </div>
            </div>
          </div>
        </div> 
        `;
      }
    })
    .catch((error) => console.log(error));
}

/* boton carrito*/
const product = [];
function buttonClick(id) {
  product.push(id);
  let currentValue = Number(
    document.getElementById("number-product").innerText
  );
  let newValue = currentValue + 1;
  document.getElementById("number-product").innerText = newValue;
  window.localStorage.setItem("product", JSON.stringify(product));
}
function redirectToCarrito() {
  window.location.href = "carrito.html";
}
