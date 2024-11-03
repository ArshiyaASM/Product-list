const products = [
  {
    id: 1,
    img: {
      mobile: "./images/image-waffle-mobile.jpg",
      tablet: "./images/image-waffle-tablet.jpg",
      desktop: "./images/image-waffle-desktop.jpg",
      thumnail: "./images/image-waffle-thumbnail.jpg",
    },
    price: "6.50",
    des: "Waffle with berries",
    name: "Waffle",
    quantity: 0,
  },
  {
    id: 2,
    img: {
      mobile: "./images/image-creme-brulee-mobile.jpg",
      tablet: "./images/image-creme-brulee-tablet.jpg",
      desktop: "./images/image-creme-brulee-desktop.jpg",
      thumnail: "./images/image-creme-brulee-thumbnail.jpg",
    },
    price: "7.00",
    des: "Vanilla Bean Creme Brulee",
    name: "Creme Brulee",
    quantity: 0,
  },
  {
    id: 3,
    img: {
      mobile: "./images/image-macaron-mobile.jpg",
      tablet: "./images/image-macaron-tablet.jpg",
      desktop: "./images/image-macaron-desktop.jpg",
      thumnail: "./images/image-macaron-thumbnail.jpg",
    },
    price: "8.00",
    des: "Macaron Mix of Five",
    name: "Macaron",
    quantity: 0,
  },
  {
    id: 4,
    img: {
      mobile: "./images/image-tiramisu-mobile.jpg",
      tablet: "./images/image-tiramisu-tablet.jpg",
      desktop: "./images/image-tiramisu-desktop.jpg",
      thumnail: "./images/image-tiramisu-thumbnail.jpg",
    },
    price: "5.50",
    des: "Classic Tiramisu",
    name: "Tiramisu",
    quantity: 0,
  },
  {
    id: 5,
    img: {
      mobile: "./images/image-baklava-mobile.jpg",
      tablet: "./images/image-baklava-tablet.jpg",
      desktop: "./images/image-baklava-desktop.jpg",
      thumnail: "./images/image-baklava-thumbnail.jpg",
    },
    price: "4.00",
    des: "Pistachio Baklava",
    name: "Baklava",
    quantity: 0,
  },
  {
    id: 6,
    img: {
      mobile: "./images/image-meringue-mobile.jpg",
      tablet: "./images/image-meringue-tablet.jpg",
      desktop: "./images/image-meringue-desktop.jpg",
      thumnail: "./images/image-meringue-thumbnail.jpg",
    },
    price: "5.00",
    des: "Lemon Meringue Pie",
    name: "Pie",
    quantity: 0,
  },
  {
    id: 7,
    img: {
      mobile: "./images/image-cake-mobile.jpg",
      tablet: "./images/image-cake-tablet.jpg",
      desktop: "./images/image-cake-desktop.jpg",
      thumnail: "./images/image-cake-thumbnail.jpg",
    },
    price: "4.50",
    des: "Red Velvet Cake",
    name: "Cake",
    quantity: 0,
  },
  {
    id: 8,
    img: {
      mobile: "./images/image-brownie-mobile.jpg",
      tablet: "./images/image-brownie-tablet.jpg",
      desktop: "./images/image-brownie-desktop.jpg",
      thumnail: "./images/image-brownie-thumbnail.jpg",
    },
    price: "5.50",
    des: "Salted Caramel Brownie",
    name: "Brownie",
    quantity: 0,
  },
  {
    id: 9,
    img: {
      mobile: "./images/image-panna-cotta-mobile.jpg",
      tablet: "./images/image-panna-cotta-tablet.jpg",
      desktop: "./images/image-panna-cotta-desktop.jpg",
      thumnail: "./images/image-panna-cotta-thumbnail.jpg",
    },
    price: "6.50",
    des: "Vanilla Panna Cotta",
    name: "Panna Cotta",
    quantity: 0,
  },
];

let cart = [];

const productList = document.querySelector(".products");
const cartList = document.querySelector(".cart");

const addProduct = () => {
  if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
    cart.forEach((item) => {
      let index = products.findIndex((value) => value.id == item.id);

      if (index != -1) {
        products[index].quantity = item.quantity;
      }
    });
    addToCartHTML();
  }
  productList.innerHTML = ``;
  products.forEach((item) => {
    addProductToHTML(item);
  });
};

addProduct();

function addProductToHTML(item) {
  if (window.innerWidth <= 768) {
    if (item.quantity == 0) {
      productList.innerHTML += `<div class="item" id=${item.id}>
                <img src=${item.img.mobile}  alt="">
                <button class="btn"><img src="./images/icon-add-to-cart.svg" alt=""> Add to Cart</button>
                <div class="text">
                    <p class="name">${item.name}</p>
                    <p class="des">${item.des}</p>
                    <p class="price">$${item.price}</p>
                </div>
            </div>
            `;

    } else {
      productList.innerHTML += `<div class="item" id=${item.id}>
                <img src=${item.img.mobile} style="border: 2px solid hsl(14, 86%, 42%);"  alt="">
                <button class="btn quantity"><span class="dec"></span><span class="quantity">${item.quantity}</span><span class="plus"></span></button>
                <div class="text">
                    <p class="name">${item.name}</p>
                    <p class="des">${item.des}</p>
                    <p class="price">$${item.price}</p>
                </div>
            </div>
            `;
    }
  } else if (window.innerWidth > 768 && window.innerWidth <= 992) {
    if (item.quantity == 0) {
      productList.innerHTML += `<div class="item" id=${item.id}>
                <img src=${item.img.mobile} alt="">
                <button class="btn"><img src="./images/icon-add-to-cart.svg" alt=""> Add to Cart</button>
                <div class="text">
                    <p class="name">${item.name}</p>
                    <p class="des">${item.des}</p>
                    <p class="price">$${item.price}</p>
                </div>
            </div>
            `;

    } else {
      productList.innerHTML += `<div class="item" id=${item.id} ">
                <img src=${item.img.mobile} style="border: 2px solid hsl(14, 86%, 42%); alt="">
                <button class="btn quantity"><span class="dec"></span><span class="quantity">${item.quantity}</span><span class="plus"></span></button>
                <div class="text">
                    <p class="name">${item.name}</p>
                    <p class="des">${item.des}</p>
                    <p class="price">$${item.price}</p>
                </div>
            </div>
            `;

    }
  } else {
    if (item.quantity == 0) {
      productList.innerHTML += `<div class="item" id=${item.id}>
                <img src=${item.img.mobile} alt="">
                <button class="btn"><img src="./images/icon-add-to-cart.svg" alt=""> Add to Cart</button>
                <div class="text">
                    <p class="name">${item.name}</p>
                    <p class="des">${item.des}</p>
                    <p class="price">$${item.price}</p>
                </div>
            </div>
            `;

    } else {
      productList.innerHTML += `<div class="item" id=${item.id} >
                <img src=${item.img.mobile} style="border: 2px solid hsl(14, 86%, 42%);" alt="">
                <button class="btn quantity"><span class="dec"></span><span class="quantity">${item.quantity}</span><span class="plus"></span></button>
                <div class="text">
                    <p class="name">${item.name}</p>
                    <p class="des">${item.des}</p>
                    <p class="price">$${item.price}</p>
                </div>
            </div>
            `;
    }
  }
}


window.addEventListener("resize", () => {
  addProduct();
});

productList.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("btn") &&
    !e.target.classList.contains("quantity")
  ) {
    addToCart(e.target.parentElement.id);
    readyToCheckout();
  }
});

function addToCart(id) {
  let index;
  if (cart.length > 0) {
    index = cart.findIndex((item) => item.id == id);
  }

  if (cart.length == 0 || index == -1) {
    cart.push({
      id: id,
      quantity: 1,
    });
  } else {
    cart[index].quantity += 1;
  }

  addToCartHTML();
  addToStorage();
}

function addToStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCartHTML() {
  if (cart.length > 0) {
    cart.forEach((item) => {
      let index = products.findIndex((value) => value.id == item.id);
      if (item.quantity == 0) {
        let Index = cart.indexOf(item);
        cart.splice(Index, 1);
        window.location.reload();
      } else {
        products[index].quantity = item.quantity;
      }
    });
  }

  if (cart.length == 0) {
    cartList.classList.add("empty");
    cartList.innerHTML = `
        <h2>Your Cart(0)</h2>
        <div class="img">
            <img src="./images/illustration-empty-cart.svg" alt="">
        </div>
        <p>Your added items will appear here</p>
        `;
  } else {
    cartList.classList.remove("empty");
    cartList.innerHTML = `
            <h2>Your Cart (<span class="totalQuantity"></span>)</h2>
            <div class="list">
            </div>
            <div class="totalPrice">
                <p>Order Total</p>
                <p class="total"</p>
            </div>
            <div class="info">
                <p><img src="./images/icon-carbon-neutral.svg" alt=""> This is carbon-neutral delivery</p>
            </div>
            <button class="confirm_btn">Confirm Order</button>
        `;
    addToListHTML();
    TotalPrice();
    readyToCheckout();
  }

  addToStorage();
}

function addToListHTML() {
  const list = document.querySelector(".list");
  list.innerHTML = "";

  cart.forEach((item) => {
    let index = products.findIndex((value) => value.id == item.id);
    let info = products[index];
    list.innerHTML += `<div class="item" id=${item.id}>
            <div class="text">
                <p class="name">${info.des}</p>
                <p><span class="quantity">${
                  info.quantity
                }x</span>&nbsp; <span class="price">@ $${
      info.price
    }</span> &nbsp <span; class="totalPrice">$${
      item.quantity * info.price
    }</span;></p>
            </div>
            <div class="icon">
                <span><img class="remove" src="./images/icon-remove-item.svg" alt=""></span>
            </div>
        </div>
        `;
    let item_lenght = document.querySelectorAll(".list .item").length;
    document.querySelector(".totalQuantity").innerHTML = item_lenght;
  });

  document.querySelectorAll(".remove").forEach((item) => {
    item.addEventListener("click", (e) => {
      let item_id =
        e.currentTarget.parentElement.parentElement.parentElement.id;
      let index = cart.findIndex((value) => value.id == item_id);
      let index1 = products.findIndex((value) => value.id == item_id);
      products[index1].quantity = 0;
      cart.splice(index, 1);
      addToListHTML();
      addToCartHTML();
      addProduct();
    });
    addToStorage();
  });
}

function TotalPrice() {
  const total = document.querySelector(".total");
  let price = 0;
  products.forEach((item) => {
    price += item.quantity * item.price;
  });
  total.innerHTML = `$${price}`;
}

productList.addEventListener("click", (e) => {
  let item;
  if (
    e.target.classList.contains("dec") ||
    e.target.classList.contains("plus")
  ) {
    let prodcut = e.target.parentElement.parentElement.id;
    let index = cart.findIndex((value) => value.id == prodcut);
    let type = "dec";
    if (e.target.classList.contains("plus")) {
      type = "plus";
    }

    e.stopPropagation();
    quantityChange(type, index, e.target);
  }
  addProduct();
});




function quantityChange(type, index) {
  switch (type) {
    case "plus": {
      cart[index].quantity += 1;
      break;
    }
    case "dec": {
      cart[index].quantity -= 1;
      break;
    }
  }
  addToCartHTML();
}

const lightbox = document.querySelector(".lightbox");

function readyToCheckout() {
  const confirm_btn = document.querySelector(".confirm_btn");

  confirm_btn.addEventListener("click", () => {
    lightbox.style.display = "flex";
    if (window.innerWidth > 768) {
      lightbox.innerHTML = `<div class="confirmed">
                <div class="top">
                    <img src="./images/icon-order-confirmed.svg" alt="">
                    <h2>Order Confirmed</h2>
                    <p>We hope you enjoy your food!</p>
                </div>
                <div class="bg">
                    <div class="list">
                        

                    </div>

                    <div class="totalPrice">
                        <p>Order Total</p>
                        <p id="totalPrice"></p>
                    </div>
                </div>
                <button class="new_order_btn">Start New Order</button>
            </div>`;
      addInfo();
    } else {
      lightbox.classList.add("moblie");
      lightbox.innerHTML = `<div class="confirmed moblie">
                <div class="top">
                    <img src="./images/icon-order-confirmed.svg" alt="">
                    <h2>Order Confirmed</h2>
                    <p>We hope you enjoy your food!</p>
                </div>
                <div class="bg">
                    <div class="list">
                        

                    </div>

                    <div class="totalPrice">
                        <p>Order Total</p>
                        <p id="totalPrice"></p>
                    </div>
                </div>
                <button class="new_order_btn">Start New Order</button>
            </div>`;
      addInfo();
    }
  });

  function addInfo() {
    const list = document.querySelector(".bg .list");
    list.innerHTML = ``;

    cart.forEach((item) => {
      let index = products.findIndex((value) => value.id == item.id);
      let info = products[index];

      list.innerHTML += `
            <div class="item">
                <div class="img">
                    <img src=${info.img.thumnail} alt="">
                </div>
                <div class="info">
                    <p class="des">${info.name}</p>
                    <p><span class="quantity">${
                      item.quantity
                    }x</span> &nbsp;&nbsp; <span class="price">@ $${
        info.price
      }</span></p>
                </div>
                <div class="totalPrice">
                    <p>$${item.quantity * info.price}</p>
                </div>
            </div>
            `;
    });
    let total = 0;
    const totalPrice = document.querySelector("#totalPrice");
    cart.forEach((item) => {
      let index = products.findIndex((value) => value.id == item.id);
      let info = products[index];
      total += item.quantity * info.price;
    });

    totalPrice.innerHTML = `$${total}`;

    const new_order_btn = document.querySelector(".new_order_btn");
    new_order_btn.addEventListener("click", () => {
      localStorage.clear();
      window.location.reload();
    });
  }
}
