function generateReport() {
    let checkboxs = document.querySelectorAll('th')

    for (let i = 0; i < checkboxs.length; i++) {
        let element = checkboxs[i]
        console.log(element.checked);
    }
    
console.log(checkboxs);
}