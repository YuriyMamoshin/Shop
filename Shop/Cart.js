import calculateTotal from "./calculateTotal.js";

export default class Cart {
  constructor() {
    this.cartContainer = document.querySelector(".cart");
    this.bodyElement = document.querySelector(".body");
  }

  clearCart() {
    this.cartContainer.innerHTML = "";
    this.cartContainer.classList.remove("cart_active");
    this.bodyElement.classList.remove("body_darkened");
  }

  renderCart() {

    this.cartContainer.classList.add("cart_active");
    this.bodyElement.classList.add("body_darkened");
    

    const cartHeader = document.createElement("header");
    cartHeader.classList.add("cart__header");

    const cartExit = document.createElement("button");
    cartExit.classList.add("cart__exit");
    cartExit.addEventListener("click", () => this.clearCart());
    cartHeader.append(cartExit);

    const cartHeading = document.createElement("h1");
    cartHeading.classList.add("cart__heading");
    cartHeading.textContent = "Your Bag";
    cartHeader.append(cartHeading);

    this.cartContainer.append(cartHeader);

    this.cartContentBar = document.createElement("section");
    this.cartContentBar.classList.add("cart__content");

    this.renderCartContent();

    this.cartContainer.append(this.cartContentBar);

    const cartFooter = document.createElement("footer");
    cartFooter.classList.add("cart__footer");

    const cartTotal = document.createElement("div");
    cartTotal.classList.add("cart__total");

    const textTotal = document.createElement("p");
    textTotal.textContent = "Total:";
    cartTotal.append(textTotal);

    const amountTotal = document.createElement("p");

    const spanUSD = document.createElement("span");
    spanUSD.textContent = "$";
    spanUSD.classList.add("cart__span");
    amountTotal.append(spanUSD);

    this.spanAmount = document.createElement("span");
    this.renderTotal();
    this.spanAmount.classList.add("cart__span");
    amountTotal.append(this.spanAmount);

    cartTotal.append(amountTotal);

    cartFooter.append(cartTotal);

    const cartCheckout = document.createElement("button");
    cartCheckout.classList.add(
      "main__orange-button",
      "main__input",
      "cart__checkout"
    );
    cartCheckout.textContent = "Checkout";
    cartFooter.append(cartCheckout);

    this.cartContainer.append(cartFooter);
  }

  renderTotal() {
    this.spanAmount.textContent = calculateTotal();
  }

  cleardCartContent() {
    this.cartContentBar.innerHTML = "";
  }

  renderCartContent() {
    this.cleardCartContent();

    const isCartNotEmpty = JSON.parse(localStorage.getItem("shop"));
    if (isCartNotEmpty) {
      const cartData = JSON.parse(localStorage.getItem("shop"));

      for (let [id, itemData] of Object.entries(cartData)) {
        this.cartContentBar.append(
          this.createCartItem(
            itemData.image,
            itemData.name,
            itemData.price,
            itemData.quantity,
            id
          )
        );
      }
    }
  }

  subtractItem(id, quantity) {
    let currentCart = JSON.parse(localStorage.getItem("shop"));

    if (quantity == 1 && Object.keys(currentCart).length === 1) {
      currentCart = "";
    } else if (quantity == 1) {
      delete currentCart[id];
    } else {
      currentCart[id].quantity = --quantity;
    }

    localStorage.setItem("shop", JSON.stringify(currentCart));

    this.renderCartContent();
    this.renderTotal();
  }

  addItem(id, quantity) {
    let currentCart = JSON.parse(localStorage.getItem("shop"));
    currentCart[id].quantity = ++quantity;
    localStorage.setItem("shop", JSON.stringify(currentCart));

    this.renderCartContent();
    this.renderTotal();
  }

  deleteItem(id) {
    let currentCart = JSON.parse(localStorage.getItem("shop"));
    delete currentCart[id];
    localStorage.setItem("shop", JSON.stringify(currentCart));

    this.renderCartContent();
    this.renderTotal();
  }

  createCartItem(img, name, price, quantity, id) {
    const itemContainer = document.createElement("article");
    itemContainer.classList.add("cart__item-container");

    const infoBlock = document.createElement("section");
    infoBlock.classList.add("cart__info");

    const imageElement = document.createElement("img");
    imageElement.classList.add("cart__image");
    imageElement.src = img;
    infoBlock.append(imageElement);

    const textBlock = document.createElement("div");
    textBlock.classList.add("cart__text-block");

    const textElement = document.createElement("p");
    textElement.classList.add("cart__text");
    textElement.innerText = name;
    textBlock.append(textElement);

    const priceElement = document.createElement("p");
    priceElement.classList.add("cart__price");
    priceElement.innerText = `$${price}`;
    textBlock.append(priceElement);

    infoBlock.append(textBlock);

    itemContainer.append(infoBlock);

    const buttonsBlock = document.createElement("aside");
    buttonsBlock.classList.add("cart__buttons-block");

    const quantityBlock = document.createElement("div");
    quantityBlock.classList.add("cart__quantity-block");

    const minusElement = document.createElement("p");
    minusElement.classList.add("cart__minus");
    minusElement.textContent = "-";
    minusElement.addEventListener("click", () =>
      this.subtractItem(id, quantity)
    );
    quantityBlock.append(minusElement);

    const quantityElement = document.createElement("p");
    quantityElement.classList.add("cart__quantity");
    quantityElement.textContent = quantity;
    quantityBlock.append(quantityElement);

    const plusElement = document.createElement("p");
    plusElement.classList.add("cart__plus");
    plusElement.textContent = "+";
    plusElement.addEventListener("click", () =>
    this.addItem(id, quantity)
  );
    quantityBlock.append(plusElement);

    
    buttonsBlock.append(quantityBlock);

    const deleteBlock = document.createElement("div");
    deleteBlock.classList.add("cart__delete-block");

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("cart__delete");
    deleteButton.addEventListener("click", () => this.deleteItem(id));
    deleteBlock.append(deleteButton);

    const deleteText = document.createElement("p");
    deleteText.classList.add("cart__delete-text");
    deleteText.textContent = "Remove";
    deleteBlock.append(deleteText);

    buttonsBlock.append(deleteBlock);

    itemContainer.append(buttonsBlock);

    return itemContainer;
  }
}
