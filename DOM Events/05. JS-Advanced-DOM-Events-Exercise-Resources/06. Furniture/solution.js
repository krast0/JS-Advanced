function solve() {
  let textAreaElement = document.querySelectorAll("#exercise textarea")[0];
  let GenareteButtonElement = document.querySelectorAll("#exercise button")[0];
  let bodyOfTable = document.querySelector("tbody");
  let buyButtonElement = document.querySelectorAll("#exercise button")[1];
  let textOutputAreaElement =
    document.querySelectorAll("#exercise textarea")[1];

  GenareteButtonElement.addEventListener("click", AddFurniture);

  function AddFurniture(e) {
    let input = JSON.parse(textAreaElement.value);
    for (let el of input) {
      let tableRowElement = document.createElement("tr");

      let furnitureName = document.createElement("td");
      furnitureName.textContent = el.name;
      furnitureName.id = "name";
      let image = document.createElement("td");
      let img = document.createElement("img");
      img.src = el.img;
      image.appendChild(img);
      image.id = "image";
      let furnitureprice = document.createElement("td");
      furnitureprice.textContent = el.price;
      furnitureprice.id = "price";
      let furnitureDec = document.createElement("td");
      furnitureDec.textContent = el.decFactor;
      furnitureDec.id = "dec";
      let checkBoxElement = document.createElement("td");
      let checkMark = document.createElement("input");
      checkMark.type = "checkbox";
      checkBoxElement.appendChild(checkMark);

      tableRowElement.appendChild(image);
      tableRowElement.appendChild(furnitureName);
      tableRowElement.appendChild(furnitureprice);
      tableRowElement.appendChild(furnitureDec);
      tableRowElement.appendChild(checkBoxElement);

      bodyOfTable.appendChild(tableRowElement);
    }
  }
  buyButtonElement.addEventListener("click", Buy);
  function Buy(e) {
    let sum = 0;
    let checkBoxElements = document.querySelectorAll("input[type = 'checkbox']");
    console.log(checkBoxElements);
    let arrayOfNames = [];
    let sumOfDecFactor = 0;

    let count = 0;
    for (let element of checkBoxElements) {
      let isChecked = element.checked;
      if (isChecked) {
        count++;
        let price = element.parentElement.parentElement.querySelector("#price");
        let name = element.parentElement.parentElement.querySelector("#name");
        let dec = element.parentElement.parentElement.querySelector("#dec");
        arrayOfNames.push(name.textContent);
        sum += Number(price.textContent);
        sumOfDecFactor += Number(dec.textContent);
      }
    }
    let avarageDecFactor = sumOfDecFactor / count;
    textOutputAreaElement.textContent = `Bought furniture: ${arrayOfNames.join(
      ", "
    )}\nTotal price: ${sum.toFixed(2)}\nAverage decoration factor: ${avarageDecFactor}`;
  }
}
