window.addEventListener('load', solve);

function solve() {
    let input = {
        productType: document.querySelector('#type-product'),
        description: document.querySelector('#description'),
        name: document.querySelector('#client-name'),
        phone: document.querySelector('#client-phone')
    }

    

   


    let sendButton = document.querySelector('button[type = "submit"]')
    
    sendButton.addEventListener('click',sendForm)

    function sendForm(e) {

        e.preventDefault()

        let productTypeValue = input.productType.value
        let descriptionValue = input.description.value
        let nameValue = input.name.value
        let phoneValue = input.phone.value;

        if( input.productType.value == '' || input.description.value == '' || input.name.value == '' || input.phone.value == ''){
            return
        }

        let recievedOrdersDiv = document.getElementById("received-orders")

        let divElement = document.createElement('div')
        divElement.className = 'container'
        divElement.innerHTML = `<h2>Product type for repair: ${input.productType.value}</h2>
        <h3>Client information: ${input.name.value}, ${input.phone.value}</h3>
        <h4>Description of the problem: ${input.description.value}</h4>
        <button class="start-btn">Start repair</button>
        <button class="finish-btn">Finish repair</button>`
        recievedOrdersDiv.appendChild(divElement)
        

        input.productType.value = ''
        input.description.value = ''
        input.name.value = ''
        input.phone.value = ''
        
        let finishButton = divElement.querySelector('.finish-btn')
        
        finishButton.disabled = true

        let startButton = divElement.querySelector('.start-btn')
        startButton.addEventListener('click',()=>{
            startButton.disabled = true
            finishButton.disabled = false

        })

        let completedOrders = document.querySelector('#completed-orders')

        finishButton.addEventListener('click',()=>{
            let div = document.createElement('div')
            div.className = 'container'
            div.innerHTML = `<h2>Product type for repair: ${productTypeValue}</h2>
            <h3>Client information: ${nameValue}, ${phoneValue}</h3>
            <h4>Description of the problem: ${descriptionValue}</h4>`
            completedOrders.appendChild(div)
            finishButton.parentElement.remove()
        })

        let clearButton = document.querySelector('.clear-btn')
        clearButton.addEventListener('click',()=>{
            let containers = Array.from(clearButton.parentElement.querySelectorAll('.container'))
            containers.forEach(element => {
                element.remove()
            });
        })


    }
}