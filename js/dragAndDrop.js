import Refrigerator from "./refr.js";

const dragAndDrop = () => {
  // const cardsList = document.querySelector(".cards__list");
  const cards = document.querySelectorAll(".card__img");
  const refr = document.querySelector(".refr");
  const food = refr.querySelectorAll(".empty");

  const countingReft = new Refrigerator(1000, ".line--satiety",
  ".line--mess");

  countingReft.init('.food');


  cards.forEach((item) => {
    item.onmousedown = function (event) {
      const newCard = document.createElement("div");
      const closeButton = document.createElement("div");
      const img = item.cloneNode(true);

      newCard.classList.add("new-card");
      closeButton.classList.add("close");
      newCard.append(img, closeButton);

      document.body.append(newCard);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        newCard.style.left = pageX - newCard.offsetWidth / 2 + "px";
        newCard.style.top = pageY - newCard.offsetHeight / 2 + "px";
      }

      // let currentDroppable = null;

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        newCard.style.visibility = "hidden";
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        newCard.style.visibility = "visible";
      
        if (!elemBelow) return;

        // let droppableBelow = elemBelow.querySelector('.empty');

        if (elemBelow.classList.contains("empty")) {
          food.forEach((item) => {
            item.style.backgroundColor = "";
          });
          elemBelow.style.backgroundColor = "#0080003b";
        } 
        // else {
        //   // elemBelow.style.backgroundColor = "";
        // }
        // if (currentDroppable != droppableBelow) {
        //     // if (currentDroppable) {
        //     //     // логика обработки процесса "вылета" из droppable (удаляем подсветку)

        //     //   }
        //     //   currentDroppable = droppableBelow;
        //     // if (currentDroppable) {
        //     //     // логика обработки процесса, когда мы "влетаем" в элемент droppable

        //     // }

        // }
      }

      document.addEventListener("mousemove", onMouseMove);

      newCard.onmouseup = function (event) {
        document.removeEventListener("mousemove", onMouseMove);
        const svg = newCard.querySelector("svg");

        newCard.style.visibility = "hidden";
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        newCard.style.visibility = "visible";

        if (elemBelow.classList.contains("empty")) {
          newCard.style.left = "0";
          newCard.style.top = "0";
          elemBelow.style.backgroundColor = "";
          elemBelow.append(newCard);
          elemBelow.classList.remove("empty");
          countingReft.add(
            svg.dataset.satiety,
            svg.dataset.mess
          );
          closeButton.addEventListener('click', function() {
            countingReft.remove(newCard, elemBelow, svg.dataset.satiety,
                svg.dataset.mess);
          });
        } else {
          food.forEach((item) => {
            item.style.backgroundColor = "";
          });
          newCard.style.display = "none";
        }

        newCard.onmouseup = null;
      };

      newCard.ondragstart = function () {
        return false;
      };
    };

    // item.addEventListener('click', () => {
    //     const newCard = item.cloneNode(false);
    //     newCard.classList.add('new');
    //     const img = item.querySelector('svg').cloneNode(true);
    //     newCard.appendChild(img);

    //     cardsList.append(newCard);
    // })
  });
};

export default dragAndDrop;
