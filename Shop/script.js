import Home from "./Home.js";
import History from "./History.js";
import Shop from "./Shop.js";
import Cart from "./Cart.js";

import dataArray from "./data.json" with {type: "json"};

class App {
  constructor() {
    this.body = document.querySelector(".body");
    this.mainElement = document.querySelector(".main");
    this.header = document.querySelector(".header");
    this.headerLogo = document.querySelector(".header__logo");
    this.headerCart = document.querySelector(".header__cart");
    this.headerFox = document.querySelector(".header__fox");
    this.footer = document.querySelector(".footer");

    this.cartIcon = document.querySelector(".header__cart");
    this.cartIcon.addEventListener("click", () => new Cart().renderCart());

    this.mainLink = document.querySelector("#main");
    this.mainLink.addEventListener("click", () => this.render("main"));
    this.historyLink = document.querySelector("#history");
    this.historyLink.addEventListener("click", () => this.render("history"));
    this.shopLink = document.querySelector("#shop");
    this.shopLink.addEventListener("click", () => this.render("shop"));

    this.menuElement = document.querySelector(".menu");
    this.dotsElement = document.querySelector(".header__dots");
    this.dotsElement.addEventListener("click", () => this.renderMenu());
    this.exitElement = document.querySelector(".menu__exit");
    this.exitElement.addEventListener("click", () => this.renderMenu());
    this.foxIcon = document.querySelector(".header__fox");
  }

  renderMenu() {
    this.menuElement.classList.toggle("menu_on");
    this.dotsElement.classList.toggle("dots_off");
    this.cartIcon.classList.toggle("cart_off");
    this.foxIcon.classList.toggle("fox_off");
    this.header.classList.toggle("header_logo-only");
    this.body.classList.toggle("body_darkened");
  }

  applyLightHeader() {
    this.header.classList.add("header__light");
    this.headerLogo.src = "images/header-logo1.svg";
    this.headerCart.src = "images/cart-dark.svg";
    this.headerFox.src = "images/fox-dark.svg";
  }

  backToDarkHeader() {
    this.header.classList.remove("header__light");
    this.headerLogo.src = "images/header-logo.svg";
    this.headerCart.src = "images/cart.svg";
    this.headerFox.src = "images/fox.svg";
  }

  clearPage() {
    this.mainElement.innerHTML = "";
  }

  render(page) {
    this.clearPage();

    switch (page) {
      case "main":
        const home = new Home();
        home.createHomePage();
        home.allButton.addEventListener("click", () => this.render("shop"));
        this.backToDarkHeader();
        break;
      case "history":
        new History().createHistoryPage();
        this.applyLightHeader();
        break;
      case "shop":
        new Shop(dataArray).renderShopPage();
        this.applyLightHeader();
        break;
    }
  }
}

const app = new App();
app.render("main");
