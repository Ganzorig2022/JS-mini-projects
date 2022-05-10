const products = [
  {
    id: 1,
    title: "jeans",
    price: 109.95,
    image: "https://cdn3.shoppy.mn/spree/images/974685/small/0541002081-1.jpg",
  },
  {
    id: 2,
    title: "jeans-1",
    price: 22.3,
    image:
      "https://cdn3.shoppy.mn/spree/images/930876/small/open-uri20210331-780268-16y9vxp.",
  },
  {
    id: 3,
    title: "jeans-2",
    price: 22.3,
    image:
      "https://cdn3.shoppy.mn/spree/images/955971/small/open-uri20210420-2245422-juqlu.",
  },
  {
    id: 4,
    title: "jeans-3",
    price: 15.99,
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

function ready() {
  listViewProducts();
  const addToCartButtons = document.getElementsByClassName("shop-item-button");
  for (let i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i];
    button.addEventListener("click", function (e) {
      const selectProductId = parseInt(
        e.target.parentNode.parentNode.getAttribute("data-id")
      );
      const selectedProduct = products[selectProductId - 1];

      selectedProducts.push(selectedProduct);
      const countItem = document.getElementById("count");
      countItem.textContent = selectedProducts.length;
      addItemToCart();
      updateCartTotal();
    });
  }
}

function listViewProducts() {
  const listProducts = document.getElementsByClassName("shop-items")[0];
  let itemHtml = "";
  products.forEach((item) => {
    itemHtml += `
    <div class="shop-item" data-id=${item.id}>
        <span class="shop-item-title">${item.title}</span>
        <img class="shop-item-image" src="${item.image}" />
        <div class="shop-item-details">
          <span class="shop-item-price">$${item.price}</span>
          <button class="btn btn-primary shop-item-button" type="button">
              ADD TO CART
          </button>
        </div>
    </div>`;
  });
  listProducts.innerHTML = itemHtml;
}

const addCart = document.getElementsByClassName("btn-cart")[0];
console.log(addCart);

addCart.addEventListener("click", function (e) {
  console.log("cart clicked");
});
