export default class History {
  constructor() {
    this.mainElement = document.querySelector(".main");
  }

  createArticle(headingContent, articleContent) {
    const articleElement = document.createElement("article");
    articleElement.classList.add("history__article");

    const articleHeadong = document.createElement("h3");
    articleHeadong.classList.add("history__heading");
    articleHeadong.textContent = headingContent;
    articleElement.append(articleHeadong);

    const articleText = document.createElement("p");
    articleText.classList.add("history__text");
    articleText.textContent = articleContent;
    articleElement.append(articleText);

    return articleElement;
  }

  createImage(src) {
    const imageElement = document.createElement("img");
    imageElement.classList.add("history__image");
    imageElement.src = src;

    return imageElement;
  }

  createHistoryPage() {

    const headerElement = document.createElement("header");
    headerElement.classList.add("secondary-header");

    const pathElement = document.createElement("p");
    pathElement.classList.add("secondary-path");
    pathElement.textContent = "Home/About us";
    headerElement.append(pathElement);

    const headingElement = document.createElement("h2");
    headingElement.classList.add("secondary-heading");
    headingElement.textContent = "Our history";
    headerElement.append(headingElement);
    this.mainElement.append(headerElement);

    const historyContent = document.createElement("section");
    historyContent.classList.add("history__content");

    const articleOne = this.createArticle(
      "Lorem ipsum dolor sit amet ipsum",
      "Lorem ipsum dolor sit amet consectetur. Amet aliquam non congue vivamus. Viverra consequat donec fringilla dolor phasellus nibh ultricies purus. Id netus semper feugiat elit turpis convallis platea. Aliquam semper in amet vitae sit augue non. Sit arcu phasellus morbi diam nullam. Proin lorem nunc ante aliquam mauris nunc. Egestas leo orci pellentesque cras. Vitae id enim amet dolor tellus dignissim id mattis."
    );
    articleOne.classList.add("history__article-one");
    historyContent.append(articleOne);

    const imageOne = this.createImage("images/history-kids.png");
    imageOne.classList.add("history__image-one");
    historyContent.append(imageOne);

    const articleTwo = this.createArticle(
      "Lorem ipsum dolor sit amet ipsum",
      "Augue dis nunc eu tempus habitant eu.Lorem ipsum dolor sit amet consectetur. Amet aliquam non congue vivamus. Viverra consequat donec fringilla dolor phasellus nibh ultricies purus. Id netus semper feugiat elit turpis convallis platea. Aliquam semper in amet vitae sit augue non. Sit arcu phasellus morbi diam nullam. Proin lorem nunc ante aliquam mauris nunc. Egestas leo orci pellentesque cras. Vitae id enim amet dolor tellus dignissim id mattis. Augue dis nunc eu tempus habitant eu."
    );
    articleTwo.classList.add("history__article-two");
    historyContent.append(articleTwo);

    const imageTwo = this.createImage("images/history-fox.png");
    historyContent.append(imageTwo);

    this.mainElement.append(historyContent);
  }
}
