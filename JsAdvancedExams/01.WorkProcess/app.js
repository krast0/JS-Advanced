function solve() {
  let button = document.getElementById("add-worker");

  let firstNameUserInput = document.getElementById("fname");
  let lastNameUserInput = document.getElementById("lname");
  let emailUserInput = document.getElementById("email");
  let birthDateUserInput = document.getElementById("birth");
  let positionUserInput = document.getElementById("position");
  let salaryUserInput = document.getElementById("salary");

  let sum = 0;

  button.addEventListener("click", (el) => {
    el.preventDefault();

    if (
      firstNameUserInput.value.length > 0 &&
      lastNameUserInput.value.length > 0 &&
      emailUserInput.value.length > 0 &&
      birthDateUserInput.value.length > 0 &&
      positionUserInput.value.length > 0 &&
      salaryUserInput.value.length > 0
    ) {
      let toBePushedTdElements = document.querySelector(".tbl-content #tbody");
      let trElement = document.createElement("tr");
      trElement.innerHTML = `
    <td>${firstNameUserInput.value}</td>
    <td>${lastNameUserInput.value}</td>
    <td>${emailUserInput.value}</td>
    <td>${birthDateUserInput.value}</td>
    <td>${positionUserInput.value}</td>
    <td>${salaryUserInput.value}</td>
    <td><button class='fired'>Fired</button> <button class='edit'>Edit</button></td>
    `;

      toBePushedTdElements.appendChild(trElement);
      let sumSalaryValue = document.getElementById("sum");

      sum += Number(salaryUserInput.value);
      sumSalaryValue.textContent = sum.toFixed(2);

      firstNameUserInput.value = "";
      lastNameUserInput.value = "";
      emailUserInput.value = "";
      birthDateUserInput.value = "";
      positionUserInput.value = "";
      salaryUserInput.value = "";

      let editButton = trElement.querySelector(".edit");
      editButton.addEventListener("click", (e) => {
        let firstNameToBeRemoved =
          editButton.parentElement.parentElement.querySelector(
            "tr :nth-child(1)"
          );
        let lastNameToBeRemoved =
          editButton.parentElement.parentElement.querySelector(
            "tr :nth-child(2)"
          );
        let EmailToBeRemoved =
          editButton.parentElement.parentElement.querySelector(
            "tr :nth-child(3)"
          );
        let BirthDateToBeRemoved =
          editButton.parentElement.parentElement.querySelector(
            "tr :nth-child(4)"
          );
        let positionToBeRemoved =
          editButton.parentElement.parentElement.querySelector(
            "tr :nth-child(5)"
          );
        let salaryToBeRemoved =
          editButton.parentElement.parentElement.querySelector(
            "tr :nth-child(6)"
          );

        firstNameUserInput.value = firstNameToBeRemoved.textContent;
        lastNameUserInput.value = lastNameToBeRemoved.textContent;
        emailUserInput.value = EmailToBeRemoved.textContent;
        birthDateUserInput.value = BirthDateToBeRemoved.textContent;
        positionUserInput.value = positionToBeRemoved.textContent;
        salaryUserInput.value = salaryToBeRemoved.textContent;

        sum -= Number(salaryToBeRemoved.textContent);
        sumSalaryValue.textContent = sum.toFixed(2);

        editButton.parentElement.parentElement.remove();
      });
      let fireButton = trElement.querySelector(".fired");
      fireButton.addEventListener("click", () => {
        let salaryToBeRemoved =
          fireButton.parentElement.parentElement.querySelector(
            "tr :nth-child(6)"
          );

        sum -= Number(salaryToBeRemoved.textContent);
        sumSalaryValue.textContent = sum.toFixed(2);
        trElement.innerHTML = "";
      });
    }
  });
}
solve();
