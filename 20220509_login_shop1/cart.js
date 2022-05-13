const products = [
  {
    id: 1,
    title: "jeans",
    price: 30000,
    image: "https://cdn3.shoppy.mn/spree/images/974685/small/0541002081-1.jpg",
  },
  {
    id: 2,
    title: "jeans-1",
    price: 45000,
    image:
      "https://cdn3.shoppy.mn/spree/images/930876/small/open-uri20210331-780268-16y9vxp.",
  },
  {
    id: 3,
    title: "jeans-2",
    price: 55000,
    image:
      "https://cdn3.shoppy.mn/spree/images/955971/small/open-uri20210420-2245422-juqlu.",
  },
  {
    id: 4,
    title: "jeans-3",
    price: 25000,
    image:
      "https://cdn3.shoppy.mn/spree/images/1272838/small/open-uri20220318-3643811-r1ouwi.",
  },
];

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
        alert("Ene baraa sagsand orson bn.");
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
      console.log(selectedProducts);
      cartCounter();
      addItemToCart();
      updateCartTotal();
    });
  }
}

// ============Delgetsend baigaa baraanuud===========
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
        <p>${item.title}</p>
        <p>${item.price} ₮</p>
        <div class="addCart-container">
          <button type="button" class="btn-cart">Сагсанд нэмэх</button>
        </div>
      </div>`;
  });

  listProducts.innerHTML = itemHtml;
}

const productsInCart = {};

// ============Sagsand orson baraanuud===========
function addItemToCart() {
  let cartItem = "";
  const cartItemList = document.getElementsByClassName("cart-items")[0];
  selectedProducts.forEach((item, idx) => {
    cartItem += `
    <div class="cart-item">
        <img class="cart-item-image" src="${item.image}" width="70px" height="70px"/>
        <span>${item.title}</span>
        <span class="cart-price">${item.product.price} ₮</span>
        <span class="cart-count">${item.count} ш</span>
        <button type="button" class="btn-remove">-</button>
        <button type="button" class="btn-add">+</button>
        <button id="btn-danger" onclick="removeCartItems(${item.id})">
          <i class="fas fa-trash"></i>
        </button>
    </div>`;
  });

  cartItemList.innerHTML = cartItem;
  increaseBtn();
}

// ============Sagsand orson baraanuudiin too hemjee===========

let cartTotal = document.getElementsByClassName("cart-total-price")[0];

function updateCartTotal() {
  let totalPrice = 0;
  selectedProducts.forEach((item) => {
    totalPrice += item.subtotal();
    console.log(item.subtotal());
  });
  cartTotal.textContent = totalPrice + "₮";
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

function increaseBtn() {
  const increaseCountBtn = document.getElementsByClassName("btn-add");

  for (let i = 0; i < increaseCountBtn.length; i++) {
    increaseCountBtn[i].addEventListener("click", () => {
      selectedProducts[i].count = selectedProducts[i].count + 1;
      let a = document.getElementsByClassName("cart-count");
      const arr = Array.from(a);
      arr.forEach((item, idx) => {
        item.textContent = selectedProducts[idx].count + "sh";
      });
      // console.log(selectedProducts[0].count);
      updateCartTotal();
    });
  }
}
