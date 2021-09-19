export default class Refrigerator {
  constructor(totalInd, indicator1, indicator2) {
    this.total = totalInd;
    this.ind1 = document.querySelector(indicator1);
    this.ind2 = document.querySelector(indicator2);
  }

  totalCount = {
    satiety: 0,
    mess: 0,
    percentSatiety: 0,
    percentMess: 0,
  };

  message = {
    1: "Кот не наелся и умер от тоски",
    2: "Кот не наелся и мало играл. В данный момент он находится в расстроенных чувствах, скорей всего справит нужду в твой тапок. Покорми кота.",
    3: "Кот не наелся, по квартире разбросаны клочки квитанций на оплату и чеки для налоговой",
    4: "Кот не наелся, кажется в спальне что-то упало. Дома нет интернета, в коридоре разорван провод от роутера",
    5: "Кот находится в идеальном состоянии. Он не голоден и не перекормлен, обои целы, со стола не сброшена колбаса. Вы восхитительны!",
    6: "Кот сыт и немного ленив, однако со стола пропала колбаса, в туалете клочки разодранной бумаги",
    7: "До апокалипсиса недалеко. Из холодильника пропало мясо, еда для кота начинает вас разорять. В комнате исчезают обои",
    8: "Кот съел всю еду. ВСЮ. Дверные косяки разодраны, со стен торчат клочки обоев. В твоём доме больше нет целой обуви. Да, даже в шкафу. Нет, это не шутка.",
    9: "У кота случилось ожирение. Он пока ещё ходит, но уже неловко прыгает с кровати",
    10: "Кот умер от ожирения",
    11: "Создать нового кота",
    12: "Попробовать ещё раз",
    13: "Состояние кота не определено. Он сидит возле закрытой двери и пытается понять что с ним произошло.",
  };

  progress() {
    this.totalCount.percentSatiety = Math.round(
      (+this.totalCount.satiety * 100) / this.total
    );
    this.totalCount.percentMess = Math.round(
      (+this.totalCount.mess * 100) / this.total
    );

    if (this.totalCount.percentSatiety > 100) {
      this.ind1.style.width = 100 + "%";
      this.ind1.closest(".stat").children[0].children[1].textContent =
        "Кот переполнен!";
    } else {
      this.ind1.style.width = this.totalCount.percentSatiety + "%";
      this.ind1.closest(".stat").children[0].children[1].textContent =
        this.totalCount.percentSatiety + "%";
    }

    if (this.totalCount.percentMess > 100) {
      this.ind2.style.width = 100 + "%";
      this.ind2.closest(".stat").children[0].children[1].textContent =
        "Кажется, это конец...";
    } else {
      this.ind2.style.width = this.totalCount.percentMess + "%";
      this.ind2.closest(".stat").children[0].children[1].textContent =
        this.totalCount.percentMess + "%";
    }

    console.log(this.totalCount.percentSatiety, this.totalCount.percentMess);
  }

  add(count1, count2) {
    if (+this.totalCount.satiety < this.total) {
      this.totalCount.satiety = +this.totalCount.satiety + +count1;
    }
    if (+this.totalCount.mess < this.total) {
      this.totalCount.mess = +this.totalCount.mess + +count2;
    }

    this.progress();
  }

  remove(card, elem, count1 = 0, count2 = 0) {
    this.totalCount.satiety = +this.totalCount.satiety - count1;
    this.totalCount.mess = +this.totalCount.mess - count2;

    if (+this.totalCount.satiety < 0) {
      this.totalCount.satiety = 0;
    }
    if (+this.totalCount.mess < 0) {
      this.totalCount.mess = 0;
    }

    card.remove();
    elem.classList.add("empty");

    this.progress();
  }

  getText() {
    let modalInfo = [];
    if (
      this.totalCount.percentSatiety < 50 &&
      this.totalCount.percentMess < 10
    ) {
      modalInfo.push(this.message[1]);
      modalInfo.push(this.message[11]);
    } else if (
      this.totalCount.percentSatiety < 50 &&
      this.totalCount.percentMess > 10 &&
      this.totalCount.percentMess < 50
    ) {
      modalInfo.push(this.message[2]);
      modalInfo.push(this.message[12]);
    } else if (
      this.totalCount.percentSatiety < 50 &&
      this.totalCount.percentMess > 50 &&
      this.totalCount.percentMess < 90
    ) {
      modalInfo.push(this.message[3]);
      modalInfo.push(this.message[12]);
    } else if (
      this.totalCount.percentSatiety < 50 &&
      this.totalCount.percentMess > 90
    ) {
      modalInfo.push(this.message[4]);
      modalInfo.push(this.message[12]);
    } else if (
      this.totalCount.percentSatiety == 50 &&
      this.totalCount.percentMess == 50
    ) {
      modalInfo.push(this.message[5]);
      modalInfo.push(this.message[12]);
    } else if (
      this.totalCount.percentSatiety > 50 &&
      this.totalCount.percentMess > 50 &&
      this.totalCount.percentMess < 90
    ) {
      modalInfo.push(this.message[6]);
      modalInfo.push(this.message[12]);
    } else if (
      this.totalCount.percentSatiety > 50 &&
      this.totalCount.percentMess > 90 &&
      this.totalCount.percentSatiety < 100 &&
      this.totalCount.percentMess < 100
    ) {
      modalInfo.push(this.message[7]);
      modalInfo.push(this.message[12]);
    } else if (
      this.totalCount.percentSatiety >= 100 &&
      this.totalCount.percentMess >= 100
    ) {
      modalInfo.push(this.message[8]);
      modalInfo.push(this.message[12]);
    } else if (
      this.totalCount.percentSatiety > 50 &&
      this.totalCount.percentMess < 50 &&
      this.totalCount.percentMess > 0
    ) {
      modalInfo.push(this.message[9]);
      modalInfo.push(this.message[12]);
    } else if (
      this.totalCount.percentSatiety > 50 &&
      this.totalCount.percentMess == 0
    ) {
      modalInfo.push(this.message[10]);
      modalInfo.push(this.message[11]);
    } else {
      modalInfo.push(this.message[13]);
      modalInfo.push(this.message[12]);
    }
    return modalInfo;
  }

  result() {
    const main = document.querySelector(".main__wrapper");
    const modal = `<div class="modal">
        <p class="modal__text">
          ${this.getText()[0]}
        </p>
        <button class="modal__button">${this.getText()[1]}</button>
        </div>`;
    main.insertAdjacentHTML("beforeend", modal);
    const modalButton = main.querySelector(".modal__button");
    modalButton.addEventListener("click", () => {
      modalButton.closest(".modal").remove();
    });
  }

  init(foods) {
    const buttons = [
      document.querySelector(".button--empty"),
      document.querySelector(".button--full"),
    ];

    for (let button of buttons) {
      button.addEventListener("click", () => {
        const food = document.querySelectorAll(foods);
        
        if (button.classList.contains("button--full") && !document.querySelector('.modal')) {
          let count = 100;
          for (let item of food) {
            if (!item.classList.contains("empty")) {
              const card = item.querySelector(".new-card");
              setTimeout(function () {
                card.classList.add("animate");
              }, count);
              setTimeout(function () {
                item.classList.add("empty");
                card.remove();
              }, count + +300);
              count += 300;
            }
          }
          this.result();
        } else {
          food.forEach((item) => {
            if (!item.classList.contains("empty")) {
              this.remove(item.firstChild, item);
            }
          });
        }
        this.totalCount.satiety = 0;
        this.totalCount.mess = 0;
        this.progress();
      });
    }
  }
}
