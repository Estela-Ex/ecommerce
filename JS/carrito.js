let products = [];

function init() {
  products = JSON.parse(window.localStorage.getItem("product"));
}

init();

for (let product of products) {
  const element = document.getElementById(product);
  element.style.display = "flex";
}

function buttonHandlerRest(input, price, subtotal) {
  let currentValue = Number(document.getElementById(input).value);
  let newValue = currentValue - 1;
  if (newValue >= 0) {
    document.getElementById(input).value = newValue;
    const productPrice = Number(document.getElementById(price).innerText);
    const subtotalPrice = newValue * productPrice;
    document.getElementById(subtotal).innerText = subtotalPrice;
  }
  getTotal();
}

function buttonHandlerSum(input, price, subtotal) {
  let currentValue = Number(document.getElementById(input).value);
  let newValue = currentValue + 1;
  document.getElementById(input).value = newValue;
  const productPrice = Number(document.getElementById(price).innerText);
  const subtotalPrice = newValue * productPrice;
  document.getElementById(subtotal).innerText = subtotalPrice;
  getTotal();
}

function getTotal() {
  let total = 0;

  for (let product of products) {
    if (product === "metro-product") {
      total += Number(
        document.getElementById("metro-product-subtotal").innerText
      );
    }
    if (product === "hilos-product") {
      total += Number(
        document.getElementById("hilos-product-subtotal").innerText
      );
    }
    if (product === "pasadores-product") {
      total += Number(
        document.getElementById("pasadores-product-subtotal").innerText
      );
    }
    if (product === "crochet-product") {
      total += Number(
        document.getElementById("crochet-product-subtotal").innerText
      );
    }
    if (product === "botones-product") {
      total += Number(
        document.getElementById("botones-product-subtotal").innerText
      );
    }
    if (product === "agujas-product") {
      total += Number(
        document.getElementById("agujas-product-subtotal").innerText
      );
    }
    if (product === "telas-product") {
      total += Number(
        document.getElementById("telas-product-subtotal").innerText
      );
    }
    if (product === "cruz-product") {
      total += Number(
        document.getElementById("cruz-product-subtotal").innerText
      );
    }
  }
  document.getElementById("total-price").innerText = total;
}

const removeButton = document.getElementById(id);
function removeProductCart() {}
