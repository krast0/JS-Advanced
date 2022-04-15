function search() {
  let listOfCities = document.querySelectorAll("#towns li");
  let includesWord = document.querySelector("#searchText").value;
  let countElement = document.getElementById("result");
  let count = 0;
  let arrayOfCities = Array.from(listOfCities);
  for (let city of arrayOfCities) {
    if (city.textContent.includes(includesWord)) {
      count++;
      city.style.fontWeight = "bold";
      city.style.textDecoration = "underline";
    } else {
      city.style.fontWeight = "normal";
      city.style.textDecoration = "none";
    }
  }
  countElement.textContent = `${count} matches found`;
}
