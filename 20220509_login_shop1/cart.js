let productsArr = [];
const catBtn = document.getElementsByClassName("catBtn");

// ===============1. FETCH-ee Data TATAh===========
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

// =============2. IRSEN PROMISE-iig ProductsArr[] array luu push-leh============
async function showApi() {
  const productObject = await getApi();

  for (let i = 0; i < productObject.length; i++) {
    productsArr.push(productObject[i]);
  }

  //============3. CATEGORY SONGOLT===========
  for (let i of catBtn) {
    i.addEventListener("click", () => {
      if (i.id == "all-products") {
        // delgetsend baraa haruuldag function ruu parameter damjuulah
        showAllProductsList(productsArr);

        // delgetsend baraa haruuldag function ruu parameter damjuulah
        addItemsToCart(productsArr);
      } else {
        const filteredItems = productsArr.filter(
          (item) => item.category == i.id
        );

        showAllProductsList(filteredItems);
        addItemsToCart(filteredItems);
      }
    });
  }
}
showApi();

// ================4. DELGETSEND BUH BARAA-g HARUULAH=====================
function showAllProductsList(ProductFromCategory) {
  const listProducts = document.getElementsByClassName("item-container")[0];
  let itemHtml = "";
  ProductFromCategory.forEach((item) => {
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

// ================5. SONGOSON BARAAG SAGS RUU YAWUULAH====================
let selectedProducts = [];
const countItem = document.getElementById("itemCounter");
const addToCartButtons = document.getElementsByClassName("btn-cart");

function addItemsToCart(ProductFromCategory) {
  for (let i = 0; i < addToCartButtons.length; i++) {
    let btnAddToCart = addToCartButtons[i];
    btnAddToCart.addEventListener("click", function () {
      const selectedProduct = ProductFromCategory[i];

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
      }
      shakeCartIcon();
      cartCounter();
      showCartProducts();
      updateCartTotal();
    });
  }
}

// ====================6. SAGSAND IRSEN BARAAG HARUULAH=====================
function showCartProducts() {
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

// ============7. Sagsand orson baraanuudiin NiiT MONGON DUN===========
let cartTotal = document.getElementsByClassName("cart-total")[0];
let cartTotalPrice = document.getElementsByClassName("cart-total-price")[0];

function updateCartTotal() {
  showCartProducts();
  let totalPrice = 0;

  if (selectedProducts.length == 0) {
    cartTotal.classList.add("hidden");
    swal("Таны сагс хоосон байна");
  } else {
    cartTotal.classList.remove("hidden");
  }
  selectedProducts.forEach((item) => {
    totalPrice += item.subtotal();

    cartTotalPrice.textContent = numberWithCommas(totalPrice.toFixed(1)) + "₮";
  });
}
// ==============8. Sagsan dah baraag ustgadag heseg==================
function removeCartItems(id) {
  selectedProducts = selectedProducts.filter((productsItem, index) => {
    return (
      selectedProducts.indexOf(productsItem) != index || productsItem.id != id
    );
  });

  cartCounter();
  showCartProducts();
  updateCartTotal();
}

// ==============9. Sagsan dah baraanii toog haruuldag function=======
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

// =======10.Sagsan dah baraanii toog NEMEHED mongon dun, shirheg-iig oorchildog function========
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

// =======11. Sagsan dah baraanii toog HASAHAD mongon dun, shirheg-iig oorchildog function============
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

// ===========================BUSAD=======================
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

//===========navbar-iin 3n zuraas buhii button=================
const toggle = document.getElementById("toggle");
//======= NAVbar garch irdeg heseg===============
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

  setTimeout(flowText, 100);
}
