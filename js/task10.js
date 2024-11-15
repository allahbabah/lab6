const createElementsButton = document.getElementById("create");
const removeElementsButton = document.getElementById("destroy");
const numberInput = document.getElementById("number-input");

const boxes = document.getElementById("boxes");

const RESIZE_STEP = 10;

createElementsButton.addEventListener("click", () => {
  let lastBoxSize = null;

  const amount = numberInput.value;

  for (let i = 0; i < amount; i++) {
    const lastBox = boxes.lastChild;

    if (lastBox) {
      lastBoxSize = parseInt(lastBox.style.width);
    }
    const box = document.createElement("div");

    box.style.width = `${
      (lastBoxSize || 30) + (i === 0 && !lastBox ? 0 : RESIZE_STEP)
    }px`;
    box.style.height = `${
    //   (lastBoxSize || 30) + RESIZE_STEP
    (lastBoxSize || 30) + (i === 0 && !lastBox ? 0 : RESIZE_STEP)
    }px`;
    box.style.backgroundColor = getRandomHexColor();

    boxes.appendChild(box);

    numberInput.value = "";
  }
});

removeElementsButton.addEventListener("click", () => {
  boxes.innerHTML = "";
});
