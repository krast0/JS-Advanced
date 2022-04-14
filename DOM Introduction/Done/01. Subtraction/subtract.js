function subtract() {
    let firstN = document.getElementById('firstNumber').value
    let secondN = document.getElementById('secondNumber').value

    let substracted = Number(firstN) - Number(secondN)

    let resultElement = document.getElementById('result')
    resultElement.textContent = substracted

    console.log(firstN);
    console.log(secondN);


}