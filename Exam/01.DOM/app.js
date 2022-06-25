window.addEventListener("load", solve);

function solve() {
  
  let input = {
    make: document.getElementById('make'),
    model: document.getElementById('model'),
    prodYear: document.getElementById('year'),
    fuel: document.getElementById('fuel'),
    originalPrice: document.getElementById('original-cost'),
    sellingPrice: document.getElementById('selling-price')
  }
  let publishButton = document.getElementById('publish')

  let tBody = document.getElementById('table-body')
  let carsList = document.getElementById('cars-list')

  let profitMade = document.getElementById("profit")
  let profit = 0


  publishButton.addEventListener("click",(e)=>{

    e.preventDefault()

    if(input.sellingPrice.value < input.originalPrice.value){
      return
    }
    if(input.make.value == '' || input.model.value  == '' || input.prodYear.value  == '' || input.fuel.value  == '' || input.originalPrice.value  == '' || input.sellingPrice.value == '' ){
      return
    }

    let makeValue = input.make.value
    let modelValue = input.model.value
    let prodYearValue = input.prodYear.value
    let fuelValue = input.fuel.value
    let originalPriceValue = input.originalPrice.value
    let sellingPriceValue = input.sellingPrice.value

    let tr = document.createElement('tr')
    tr.className = 'row'
    tr.innerHTML = `<td>${input.make.value}</td>
    <td>${input.model.value}</td>
    <td>${input.prodYear.value}</td>
    <td>${input.fuel.value}</td>
    <td>${input.originalPrice.value}</td>
    <td>${input.sellingPrice.value}</td>
    <td>
    <button class="action-btn edit">Edit</button>
    <button class="action-btn sell">Sell</button>
    </td>`

    tBody.appendChild(tr)

    input.make.value = ''
    input.model.value = ''
    input.prodYear.value = ''
    input.fuel.value = ''
    input.originalPrice.value = ''
    input.sellingPrice.value = ''

    let editBtn = tr.querySelectorAll('.action-btn')[0]
    let sellBtn = tr.querySelectorAll('.action-btn')[1]

    editBtn.addEventListener('click',()=>{
      tr.remove()
      input.make.value = makeValue
      input.model.value = modelValue
      input.prodYear.value = prodYearValue
      input.fuel.value = fuelValue
      input.originalPrice.value = originalPriceValue
      input.sellingPrice.value = sellingPriceValue
    })

    sellBtn.addEventListener('click',()=>{
      tr.remove()
      let difference = sellingPriceValue - originalPriceValue
      let liElement = document.createElement('li')
      liElement.className = "each-list"
      liElement.innerHTML = `
      <span>${makeValue} ${modelValue}</span>
      <span>${prodYearValue}</span>
      <span>${difference}</span>`
      profit += difference
      carsList.appendChild(liElement)
      profitMade.textContent = profit.toFixed(2)
    })
    

  })

  

}
