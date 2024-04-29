export default class Home {
  constructor() {
    this.mainElement = document.querySelector(".main");

  }

  createHomePage() {

    const discoverBlock = document.createElement("section");
    discoverBlock.classList.add("main__discover");

    const mainHeadingElement = document.createElement("h1");
    mainHeadingElement.classList.add("main__heading");
    mainHeadingElement.textContent = "Discover foxlife";
    discoverBlock.append(mainHeadingElement);

    const mainTextElement = document.createElement("p");
    mainTextElement.classList.add("main__text");
    mainTextElement.textContent =
      "Lorem ipsum dolor sit amet consectetur. Phar eget turpis sem ultricies dolor sit amet consectetur.";
    discoverBlock.append(mainTextElement);

    this.mainElement.append(discoverBlock);

    const linksBlock = document.createElement("section");
    linksBlock.classList.add("main__links");

    const cardHen = document.createElement("article");
    cardHen.classList.add("main__links-item", "card", "card__hen");

    const textBlockHen = document.createElement("div");
    textBlockHen.classList.add("card__text-block");

    const headingHen = document.createElement("h4");
    headingHen.classList.add("card__heading");
    headingHen.textContent = "#Forest";
    textBlockHen.append(headingHen);

    const textHen = document.createElement("p");
    textHen.classList.add("card__text");
    textHen.textContent = "Lorem ipsum dolor sit amet ipsum";
    textBlockHen.append(textHen);

    cardHen.append(textBlockHen);

    const imageHen = document.createElement("img");
    imageHen.src = "images/hen.png";
    imageHen.classList.add("card__image-hen");

    cardHen.append(imageHen);
    linksBlock.append(cardHen);

    const cardCock = document.createElement("article");
    cardCock.classList.add("main__links-item", "card", "card__cock");

    const textBlockCock = document.createElement("div");
    textBlockCock.classList.add("card__text-block");

    const headingCock = document.createElement("h4");
    headingCock.classList.add("card__heading");
    headingCock.textContent = "#Kids";
    textBlockCock.append(headingCock);

    const textCock = document.createElement("p");
    textCock.classList.add("card__text");
    textCock.textContent = "Lorem ipsum dolor sit amet ipsum";
    textBlockCock.append(textCock);

    cardCock.append(textBlockCock);

    const imageCock = document.createElement("img");
    imageCock.src = "images/cock.png";
    imageCock.classList.add("card__image-cock");

    cardCock.append(imageCock);
    linksBlock.append(cardCock);

    const cardFox = document.createElement("article");
    cardFox.classList.add("main__links-item", "card", "card__fox");

    const textBlockFox = document.createElement("div");
    textBlockFox.classList.add("card__text-block");

    const headingFox = document.createElement("h4");
    headingFox.classList.add("card__heading");
    headingFox.textContent = "#Other";
    textBlockFox.append(headingFox);

    const textFox = document.createElement("p");
    textFox.classList.add("card__text");
    textFox.textContent = "Lorem ipsum dolor sit amet ipsum";
    textBlockFox.append(textFox);

    cardFox.append(textBlockFox);

    const imageFox = document.createElement("img");
    imageFox.src = "images/fox.png";
    imageFox.classList.add("card__image-fox");

    cardFox.append(imageFox);
    linksBlock.append(cardFox);

    this.allButton = document.createElement("button");
    this.allButton.classList.add(
      "main__links-item",
      "main__orange-button",
      "main__input"
    );
    this.allButton.textContent = "All foxes";
    linksBlock.append(this.allButton);

    this.mainElement.append(linksBlock);

    const joinBlock = document.createElement("section");
    joinBlock.classList.add("join");

    const joinTextBlock = document.createElement("article");
    joinTextBlock.classList.add("join__text-block");

    const joinHeading = document.createElement("h4");
    joinHeading.classList.add("join__heading");
    joinHeading.textContent = "Join our newsletter";
    joinTextBlock.append(joinHeading);

    const joinText = document.createElement("p");
    joinText.classList.add("join__text");
    joinText.textContent =
      "Lorem ipsum dolor sit amet consectetur. Molestie turpis quis turpis fermentum egestas bibendum.Lorem ipsum dolor sit amet consectetur.";
    joinTextBlock.append(joinText);
    joinBlock.append(joinTextBlock);

    const joinInputBlock = document.createElement("article");
    joinInputBlock.classList.add("join__input-block");

    const joinEmail = document.createElement("input");
    joinEmail.setAttribute("type", "email");
    joinEmail.placeholder = "Enter email";
    joinEmail.classList.add("join__email", "main__input");
    joinInputBlock.append(joinEmail);

    const joinSubscribe = document.createElement("button");
    joinSubscribe.textContent = "Subscribe";
    joinSubscribe.classList.add("join__subscribe", "main__input");
    joinInputBlock.append(joinSubscribe);
    joinBlock.append(joinInputBlock);

    this.mainElement.append(joinBlock);

  }
}
