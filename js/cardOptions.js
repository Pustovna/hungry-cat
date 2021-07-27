const cardOptions = () => {
  const checkBox = document.querySelectorAll('[name="count"]');

  checkBox.forEach((item) => {
    item.onchange = function () {
      const imgParent = item.closest(".card__content"),
        img = imgParent.querySelector(".card__img"),
        count = item.previousElementSibling.textContent;
      if (item.checked) {
        if (item.value == "satiety") {
          img.dataset.satiety = +img.dataset.satiety + +count;
        } else if (item.value == "mess") {
          img.dataset.mess = +img.dataset.mess + +count;
        }
      } else {
        if (item.value == "satiety") {
          img.dataset.satiety = +img.dataset.satiety - +count;
        } else if (item.value == "mess") {
          img.dataset.mess = +img.dataset.mess - +count;
        }
      }
    };
  });
};

export default cardOptions;
