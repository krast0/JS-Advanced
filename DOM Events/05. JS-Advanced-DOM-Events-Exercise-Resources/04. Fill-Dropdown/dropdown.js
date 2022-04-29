function addItem() {
    let TextContentElement = document.getElementById('newItemText')
    let ValueElement = document.getElementById('newItemValue')
    let dropdownMenu = document.getElementById('menu')

    let option = document.createElement('option')
    option.textContent = TextContentElement.value
    option.value = ValueElement.value

    dropdownMenu.appendChild(option)

    TextContentElement.value = ''
    ValueElement.value = ''
    console.log(option);
  
}