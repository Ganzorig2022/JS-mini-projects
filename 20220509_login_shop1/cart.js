let products = [];

let limit = 5;
// let page = 1;
// https://fakestoreapi.com/products?limit=${limit}

async function getApi() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
  } catch (error) {
    // alert("Алдаа:" + error);
    swal("Алдаа:" + error);
  }
}

async function showApi() {
  const posts = await getApi();

  for (let i = 0; i < posts.length; i++) {
    products.push(posts[i]);
  }

  setTimeout(ready, 2000);
}
showApi();

if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

let selectedProducts = [];
const countItem = document.getElementById("itemCounter");
const addToCartButtons = document.getElementsByClassName("btn-cart");

function ready() {
  listViewProducts();
  for (let i = 0; i < addToCartButtons.length; i++) {
    let btnAddToCart = addToCartButtons[i];
    btnAddToCart.addEventListener("click", function () {
      const selectedProduct = products[i];
      const isExist = selectedProducts.findIndex(
        (item) => item.id === selectedProduct.id
      );

      if (isExist > -1) {
        swal("Уучлаарай, энэ бараа сагсанд орсон байна!");
      } else {
        const itemCart = {
          id: selectedProduct.id,
          title: selectedProduct.title,
          image: selectedProduct.image,
          product: selectedProduct,
          count: 1,
          subtotal: function () {
            return selectedProduct.price * this.count;
          },
        };
        selectedProducts.push(itemCart);
        console.log(selectedProducts);
      }
      shakeCartIcon();
      cartCounter();
      addItemToCart();
      updateCartTotal();
    });
  }
}

// ================Delgetsend baigaa baraanuud=====================
function listViewProducts() {
  const listProducts = document.getElementsByClassName("item-container")[0];
  let itemHtml = "";
  products.forEach((item) => {
    itemHtml += `
    <div class="shop-item" data-id=${item.id}>
        <img
          src="${item.image}"
          alt=""
        />
        <p>${shortenString(item.title)}</p>
        <p>${numberWithCommas(item.price)} ₮</p>
        <div class="addCart-container">
          <button type="button" class="btn-cart" >Сагсанд нэмэх
          <i class="fas fa-paper-plane"></i></button>
        </div>
      </div>`;
  });

  listProducts.innerHTML = itemHtml;
}

const productsInCart = {};

// ====================Sagsand orson baraanuud=====================
function addItemToCart() {
  let cartItem = "";
  const cartItemList = document.getElementsByClassName("cart-items")[0];
  selectedProducts.forEach((item) => {
    cartItem += `
    <div class="cart-item">
        <img class="cart-item-image" src="${
          item.image
        }" width="70px" height="70px"/>
        <span>${shortenString(item.title)}</span>
        <span class="cart-price">${numberWithCommas(
          item.product.price
        )} ₮</span>
        <button type="button" class="btn-remove">-</button>
        <span class="cart-count">${item.count} ш</span>
        <button type="button" class="btn-add">+</button>
        <span class="cart-subTotal-price">= ${numberWithCommas(
          item.subtotal()
        )} ₮</span>
        <button id="btn-danger" onclick="removeCartItems(${item.id})">
          <i class="fas fa-trash"></i>
        </button>
    </div>`;
  });

  cartItemList.innerHTML = cartItem;
  increaseBtn();
  decreaseBtn();
}

// ============Sagsand orson baraanuudiin MONGON DUN===========

let cartTotal = document.getElementsByClassName("cart-total-price")[0];

function updateCartTotal() {
  addItemToCart();
  let totalPrice = 0;

  selectedProducts.forEach((item) => {
    totalPrice += item.subtotal();
  });

  cartTotal.textContent = numberWithCommas(totalPrice.toFixed(1)) + "₮";
}

// ==============Sagsan dah baraag ustgadag heseg==================
function removeCartItems(id) {
  selectedProducts = selectedProducts.filter((productsItem, index) => {
    return (
      selectedProducts.indexOf(productsItem) != index || productsItem.id != id
    );
  });

  cartCounter();
  addItemToCart();
  updateCartTotal();
}

// ==============Sagsan dah baraanii toog haruuldag function=======
const cartIcon = document.getElementsByClassName("fa-shopping-cart")[0];

function cartCounter() {
  if (selectedProducts.length <= 0) {
    countItem.textContent = "";
    countItem.classList.remove("visible");
    cartIcon.classList.remove("red");
  } else {
    countItem.textContent = selectedProducts.length;
    countItem.classList.add("visible");
    cartIcon.classList.add("red");
  }
}

// =======Sagsan dah baraanii toog NEMEHED mongon dun, too shirheg--ig oorchildog function============
function increaseBtn() {
  const increaseCountBtn = document.getElementsByClassName("btn-add");

  for (let i = 0; i < increaseCountBtn.length; i++) {
    increaseCountBtn[i].addEventListener("click", () => {
      selectedProducts[i].count++;
      let cartCount = document.getElementsByClassName("cart-count");
      const arr = Array.from(cartCount);
      arr.forEach((item, idx) => {
        item.textContent = selectedProducts[idx].count + " ш";
      });
      updateCartTotal();
    });
  }
}

// =======Sagsan dah baraanii toog HASAHAD mongon dun, too shirheg--ig oorchildog function============
function decreaseBtn() {
  const decreaseCountBtn = document.getElementsByClassName("btn-remove");

  for (let i = 0; i < decreaseCountBtn.length; i++) {
    decreaseCountBtn[i].addEventListener("click", () => {
      selectedProducts[i].count--;
      let cartCount = document.getElementsByClassName("cart-count");
      const arr = Array.from(cartCount);
      arr.forEach((item, idx) => {
        item.textContent = selectedProducts[idx].count + " ш";
      });
      updateCartTotal();
    });
  }
}

// ====Sagsan dah baraag haruulah tsonhiig neej haah heseg=========
const cartBtn = document.getElementById("cartBtn");
const cartItemContainer = document.getElementById("cart-item-container");
const closeBtn = document.getElementById("close-btn");

cartBtn.addEventListener("click", function (e) {
  cartItemContainer.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  cartItemContainer.classList.remove("show");
});

//===========navbar-iin 3n zuraas buhii button
const toggle = document.getElementById("toggle");

//======= toggle NAVbar garch irdeg heseg
toggle.addEventListener("click", () => {
  document.body.classList.toggle("show-nav");
});

//======= cart Icon-iig shake buyu SEGSERDEG animation=========
function shakeCartIcon() {
  cartIcon.classList.add("shake");
}

//======= Toonii BUHEL ORON bolgodog function (1000 => 1,000)=========
function numberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//======= Text-iin TASDAAD bagasgadag function (1000 => 1,000)=========
function shortenString(string) {
  return string.replace(/^(.{11}[^\s]*).*/, "$1");
}

// ======h1 tagnii TEXT ni usegnuud ar araasa ursdag effect========
const textEl = document.getElementById("flowing-text");
const text = "Манай Онлайн Дэлгүүрээр тавтай үйлчлүүлээрэй!";

let idx = 1;

flowText();

function flowText() {
  textEl.innerText = text.slice(0, idx);

  idx++;

  if (idx > text.length) {
    idx = 1;
  }

  setTimeout(flowText, 200);
}
