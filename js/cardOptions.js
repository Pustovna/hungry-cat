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

  const cards = document.querySelectorAll('.card');

  cards.forEach(item => {
    const acts = item.querySelectorAll('.price')
    item.dataset.totalSt = +acts[0].textContent + +acts[1].textContent;
    item.dataset.totalMs = +acts[2].textContent + +acts[3].textContent;
  })
};

export default cardOptions;
