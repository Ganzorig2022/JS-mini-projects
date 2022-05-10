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

const selectedProducts = [];

if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

// const itemCounterAddBtn = document.getElementsByClassName("btn-add");
// const inputQty = document.getElementsByClassName("inputQty");
// for (let i = 0; i < itemCounterAddBtn.length; i++) {
//   var buttonAdd = itemCounterAddBtn[i];
//   buttonAdd.addEventListener("click", function (e, idx) {
//     const selectedProduct = products[idx];
//     console.log(products[idx]);
//   });
// }

function ready() {
  listViewProducts();
  const addToCartButtons = document.getElementsByClassName("btn-cart");
  for (let i = 0; i < addToCartButtons.length; i++) {
    var btnAddToCart = addToCartButtons[i];
    btnAddToCart.addEventListener("click", function (e) {
      const selectProductId = parseInt(
        e.target.parentNode.parentNode.getAttribute("data-id")
      );
      const selectedProduct = products[selectProductId - 1];

      selectedProducts.push(selectedProduct);

      const countItem = document.getElementById("itemCounter");
      countItem.classList.add("visible");
      countItem.textContent = selectedProducts.length;
      addItemToCart();
      updateCartTotal();
    });
  }
}

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
        <p>${item.price}₮</p>
        <div class="addCart-container">
          <button type="button" class="btn-remove">-</button>
          <input type="text" class="inputQty" required/>
          <button type="button" class="btn-add">+</button>
          <button type="button" class="btn-cart">Add Cart</button>
        </div>
      </div>`;
  });
  listProducts.innerHTML = itemHtml;
}
function addItemToCart() {
  let cartItem = "";
  const cartItemList = document.getElementsByClassName("cart-items")[0];
  selectedProducts.forEach((product) => {
    cartItem += `
    <div class="cart-item">
        <img class="cart-item-image" src="${product.image}" width="70px" height="70px"/>
        <span>${product.title}</span>
        <span class="cart-price">${product.price} ₮</span>
        <button id="btn-danger">
          <i class="fas fa-trash"></i>
        </button>
    </div>`;
  });
  cartItemList.innerHTML = cartItem;

  const removeCartItem = document.querySelectorAll("#btn-danger");
  removeCartItem.forEach(function (task) {
    task.addEventListener("click", removeTask);
  });
}

function updateCartTotal() {
  let totalPrice = 0;
  selectedProducts.forEach((item) => {
    totalPrice += item.price;
  });

  document.getElementsByClassName("cart-total-price")[0].textContent =
    "$" + totalPrice;
}

// ===============================================================
const cartBtn = document.getElementById("cartBtn");
const cartItemContainer = document.getElementById("cart-item-container");
const closeBtn = document.getElementById("close-btn");

cartBtn.addEventListener("click", function (e) {
  cartItemContainer.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  cartItemContainer.classList.remove("show");
});

// =================================================
function removeTask(e) {
  if (e.target.parentElement.parentElement.classList.contains("cart-item")) {
    e.target.parentElement.parentElement.remove();
  }
}
