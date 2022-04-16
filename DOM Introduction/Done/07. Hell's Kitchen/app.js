function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);
  function onClick() {
    let obj = {};
    let objWorkers = {};
    let restorants = JSON.parse(document.querySelector("textarea").value);
    let outputBestResturant = document.querySelector("#bestRestaurant p");
    let outputBestWorkers = document.querySelector("#workers p");
    for (let el of restorants) {
      let allMoney = 0;
      let count = 0;
      let [nameOfResturant, workers] = el.split(" - ");
      let splittedWorkers = workers.split(", ");
      let biggestSalary = [];
      for (let element of splittedWorkers) {
        let [nameOfWorker, salaryOfWorker] = element.split(" ");
        count++;
        allMoney += Number(salaryOfWorker);
        biggestSalary.push(salaryOfWorker);
      }
      let biggestSalaryOfWorker = biggestSalary.sort((a, b) => b - a)[0];

      let avarageSalary = allMoney / count;
      obj[nameOfResturant] = avarageSalary;
      objWorkers[nameOfResturant] = [
        workers,
        avarageSalary,
        biggestSalaryOfWorker,
      ];
    }
    let entries = Object.entries(obj);
    let sorted = entries.sort((a, b) => b[1] - a[1]);
    let richestResturant = sorted[0];

    let nameOfRichestResturant = richestResturant[0];
    let maxSalary = richestResturant[1];
    let output = document.createElement("p");
    output.textContent = `Name: ${nameOfRichestResturant} Average Salary: ${objWorkers[
      nameOfRichestResturant
    ][1].toFixed(2)} Best Salary: ${Number(
      objWorkers[nameOfRichestResturant][2]
    ).toFixed(2)}`;
    outputBestResturant.appendChild(output);
    let array = objWorkers[nameOfRichestResturant][0].split(", ");

    let finalObj = {};
    for (let elem of array) {
      let [person, salary] = elem.split(" ");
      finalObj[person] = salary;
    }
    let entriess = Object.entries(finalObj);
    let sortedEntries = entriess.sort((a, b) => b[1] - a[1]);
    let stringArray = [];
    for (let entry of sortedEntries) {
      stringArray.push(`Name: ${entry[0]} With Salary: ${entry[1]}`);
    }
    let outputSalary = document.createElement("p");
    outputSalary.textContent = stringArray.join(" ");
    outputBestWorkers.appendChild(outputSalary);
  }
}
