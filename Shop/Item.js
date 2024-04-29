export default class Item {
  constructor(id, image, type, name, price) {
    this.id = id;
    this.image = image;
    this.type = type;
    this.name = name;
    this.price = price;
  }

  addToCart(name, id, price, image) {
    let cartData = {};
    const isCartNotEmpty = JSON.parse(localStorage.getItem("shop"));

    if (isCartNotEmpty) {
      cartData = JSON.parse(localStorage.getItem("shop"));
    }

    let currentQuantity = cartData[id] ? cartData[id].quantity : 0;

    const cartItemData = {
      name: name,
      price: price,
      image: image,
      quantity: ++currentQuantity,
    };

    cartData[id] = cartItemData;

    localStorage.setItem("shop", JSON.stringify(cartData));
  }

  createItem() {
    const itemElement = document.createElement("section");
    itemElement.classList.add("shop__item");

    const addButton = document.createElement("button");
    addButton.classList.add("shop__add");
    addButton.addEventListener("click", () =>
      this.addToCart(this.name, this.id, this.price, this.image)
    );
    itemElement.append(addButton);

    const imageElement = document.createElement("img");
    imageElement.classList.add("shop__image");
    imageElement.src = this.image;
    itemElement.append(imageElement);

    const contentBlock = document.createElement("div");
    contentBlock.classList.add("shop__content-block");

    const nameElement = document.createElement("p");
    nameElement.classList.add("shop__name");
    nameElement.textContent = this.name;
    contentBlock.append(nameElement);

    const priceElement = document.createElement("p");
    priceElement.classList.add("shop__price");
    priceElement.textContent = `$${this.price.toFixed(2)}`;
    contentBlock.append(priceElement);

    const starsElement = document.createElement("img");
    starsElement.classList.add("shop__stars");
    starsElement.src = "images/stars.svg";
    contentBlock.append(starsElement);

    const typeElement = document.createElement("p");
    typeElement.classList.add("shop__type");
    typeElement.textContent = this.type;
    contentBlock.append(typeElement);

    itemElement.append(contentBlock);

    return itemElement;
  }
}
