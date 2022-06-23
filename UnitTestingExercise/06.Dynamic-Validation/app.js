function validate() {
  let inputEmailElement = document.getElementById("email");

  let pattern = new RegExp("^[a-z]+@[a-z]+.[a-z]+");

  inputEmailElement.addEventListener("change", () => {
    let emailAsString = inputEmailElement.value;

    if (pattern.test(emailAsString)) {
      inputEmailElement.classList.remove("error");
    } else {
      inputEmailElement.classList.add("error");
    }
  });
}
