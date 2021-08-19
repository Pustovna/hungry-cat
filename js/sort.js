const sort = () => {
  const sortButton = document.querySelectorAll(".sort__button");

  sortButton.forEach((element, index) => {
    element.addEventListener("click", function () {
      if (index % 2 != 0) {
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
