import Item from "./Item.js";

export default class Shop {
  constructor(itemsArray) {
    this.mainElement = document.querySelector(".main");
    this.itemsArray = itemsArray;
    this.filtersState = { priceValue: 0, types: {}, searchValue: "" };

    this.buttonsData = [
      { id: "Forest", name: "Forest" },
      { id: "Kid", name: "Fox kids" },
      { id: "All", name: "All" },
      { id: "Other", name: "Other" },
    ];
  }

  renderShopPage() {
    this.mainElement.classList.add("shop");

    const headerElement = document.createElement("header");
    headerElement.classList.add("secondary-header");

    const pathElement = document.createElement("p");
    pathElement.classList.add("secondary-path");
    pathElement.textContent = "Home/All items";
    headerElement.append(pathElement);

    const headingElement = document.createElement("h2");
    headingElement.classList.add("secondary-heading");
    headingElement.textContent = "All items";
    headerElement.append(headingElement);
    this.mainElement.append(headerElement);

    const shopContent = document.createElement("article");
shopContent.classList.add("shop__content");

    const filtersBlock = document.createElement("section");
    filtersBlock.classList.add("shop__filters");

    const searchContainer = document.createElement("div");
    searchContainer.classList.add("shop__search-container");

    this.searchElement = document.createElement("input");
    this.searchElement.classList.add("shop__search");
    this.searchElement.placeholder = "Search";
    this.searchElement.addEventListener("input", (event) => {
      this.filtersState.searchValue = event.target.value;
      this.renderShopContent();
    });
    searchContainer.append(this.searchElement);

    const magnifier = document.createElement("aside");
    magnifier.classList.add("shop__magnifier");
    searchContainer.append(magnifier);

    filtersBlock.append(searchContainer);

    const typesHeading = document.createElement("h4");
    typesHeading.classList.add("shop__filters-heading");
    typesHeading.textContent = "Type of fox";
    filtersBlock.append(typesHeading);

    this.typesContainer = document.createElement("div");
    this.typesContainer.classList.add("shop__types-container");

    this.renderTypeButtons();

    filtersBlock.append(this.typesContainer);

    const priceHeading = document.createElement("h4");
    priceHeading.classList.add("shop__filters-heading");
    priceHeading.textContent = "Price";
    filtersBlock.append(priceHeading);

    shopContent.append(filtersBlock);

    this.priceContainer = document.createElement("div");
    this.priceContainer.classList.add("shop__price-container");

    this.renderPriceBar();

    shopContent.append(this.priceContainer);

    shopContent.append(this.createShopContainer());

    shopContent.append(this.createAllButton());

   this.mainElement.append(shopContent);
  }

  createTypeButton(id, name, isActive) {
    const typeButton = document.createElement("button");
    typeButton.classList.add("shop__type-button");
    typeButton.setAttribute("id", id);
    typeButton.textContent = name;

    if (!isActive) {
      typeButton.classList.remove("shop__type-button_active");
    } else {
      typeButton.classList.add("shop__type-button_active");
    }

    typeButton.addEventListener("click", (event) => {
      const buttonId = event.target.id;
      if (buttonId === "All") {
        this.filtersState.types = {};
      } else if (!this.filtersState.types[buttonId]) {
        this.filtersState.types[buttonId] = true;
      } else {
        delete this.filtersState.types[buttonId];
      }
      this.renderTypeButtons();
      this.renderShopContent();
    });

    return typeButton;
  }

  clearTypesContainer() {
    this.typesContainer.innerHTML = "";
  }

  renderTypeButtons() {
    this.clearTypesContainer();

    if (!Object.keys(this.filtersState.types).length) {
      for (let button of this.buttonsData) {
        this.typesContainer.append(
          this.createTypeButton(button.id, button.name, false)
        );
      }
    } else {
      for (let button of this.buttonsData) {
        this.typesContainer.append(
          this.createTypeButton(
            button.id,
            button.name,
            this.filtersState.types[button.id]
          )
        );
      }
    }
  }

  clearPriceFilter() {
    this.priceContainer.innerHTML = "";
  }

  renderSliderProgress() {
    const progress =
      (this.filtersState.priceValue / this.sliderElement.max) * 100;
    this.sliderElement.style.background = `linear-gradient(to right,  #cc5520  ${progress}%,  #E6E4EA ${progress}%)`;
  }

  renderPriceBar() {
    this.clearPriceFilter();

    this.sliderElement = document.createElement("input");
    this.sliderElement.classList.add("shop__slider");
    this.sliderElement.setAttribute("type", "range");
    this.sliderElement.setAttribute("min", "0");
    this.sliderElement.setAttribute("max", "160");
    this.sliderElement.setAttribute("step", "20");
    this.sliderElement.setAttribute("value", this.filtersState.priceValue);

    this.sliderElement.addEventListener("input", (event) => {
      this.filtersState.priceValue = event.target.value;
      this.outputElement.textContent = `Value: $${this.filtersState.priceValue}`;
      this.renderSliderProgress();
      this.renderShopContent();
    });

    this.sliderWrapper = document.createElement("section");
    this.sliderWrapper.classList.add("shop__slider-wrapper");

    this.outputElement = document.createElement("output");
    this.outputElement.classList.add("shop__price-output");

    this.renderSliderProgress();
    this.sliderElement.setAttribute("value", this.filtersState.priceValue);
    this.outputElement.textContent = `Value: $${this.filtersState.priceValue}`;

    this.sliderWrapper.append(this.sliderElement);
    this.priceContainer.append(this.sliderWrapper);
    this.priceContainer.append(this.outputElement);
  }

  createShopContainer() {
    this.shopContainer = document.createElement("section");
    this.shopContainer.classList.add("shop__container");

    this.renderShopContent();

    return this.shopContainer;
  }

  clearShopContent() {
    this.shopContainer.innerHTML = "";
  }

  renderShopContent() {
    this.clearShopContent();

    for (let item of this.itemsArray) {
      const passedPriceFilter = +item.price >= +this.filtersState.priceValue;
      const passedTypeFilter =
        !Object.keys(this.filtersState.types).length ||
        this.filtersState.types[item.type];
      const passedSearchFilter = item.name
        .toLowerCase()
        .includes(this.filtersState.searchValue.toLowerCase());

      if (passedPriceFilter && passedTypeFilter && passedSearchFilter) {
        const shopItem = new Item(
          item.id,
          item.image,
          item.type,
          item.name,
          +item.price
        );

        this.shopContainer.append(shopItem.createItem());
      }
    }
  }

  createAllButton() {
    const allButton = document.createElement("button");
    allButton.classList.add(
      "main__links-item",
      "main__orange-button",
      "main__input"
    );
    allButton.textContent = "All foxes";
    allButton.addEventListener("click", () => {
      this.filtersState = { priceValue: 0, types: {}, searchValue: "" };
      this.renderTypeButtons();
      this.renderShopContent();
      this.renderPriceBar();
      this.searchElement.value = "";
    });
    return allButton;
  }
}
