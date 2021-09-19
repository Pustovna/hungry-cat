const sort = () => {
  const sortButton = document.querySelectorAll(".sort__button");

  sortButton.forEach((element, index) => {
    element.addEventListener("click", function (e) {
      const target = e.target;
      if (index % 2 != 0) {
        const buttonsList = target.parentNode.querySelectorAll(".sort__button");
        buttonsList.forEach((item) => {
          if (item.classList.contains("active")) {
            item.classList.remove("active");
          }
        });
        target.classList.add("active");
        const cards = element
          .closest(".cards__wrapper")
          .querySelectorAll(".card");
        const list = element.closest(".cards__wrapper").children[1];

        const arrCards = Array.from(cards);
        arrCards.sort(function (a, b) {
          return +b.dataset.totalMs - +a.dataset.totalMs;
        });

        arrCards.forEach((item, i) => {
          if (i > 1) {
            list.append(item);
          }
        });
      } else {
        const buttonsList = target.parentNode.querySelectorAll(".sort__button");
        buttonsList.forEach((item) => {
          if (item.classList.contains("active")) {
            item.classList.remove("active");
          }
        });
        target.classList.add("active");
        const cards = element
          .closest(".cards__wrapper")
          .querySelectorAll(".card");
        const list = element.closest(".cards__wrapper").children[1];

        const arrCards = Array.from(cards);
        arrCards.sort(function (a, b) {
          return +b.dataset.totalSt - +a.dataset.totalSt;
        });

        arrCards.forEach((item) => {
          list.append(item);
        });
      }
    });
  });
};

export default sort;
