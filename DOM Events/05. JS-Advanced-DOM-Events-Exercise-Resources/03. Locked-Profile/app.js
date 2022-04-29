function lockedProfile() {
    let buttonsElements = Array.from(document.querySelectorAll('.profile button'))
    .forEach(button => button.addEventListener('click', Clicked))


    function Clicked(event) {
        
        let isActive = event.target.parentElement.querySelector('input[value="unlock"]').checked
        if(isActive){
            let idOfDivElement = event.target.parentElement.querySelector('div').id
            let divElement = document.getElementById(idOfDivElement)
            let buttonText = event.target.textContent 
            if (buttonText == 'Show more') {
                buttonText = event.target.textContent = 'Hide it'
                divElement.style.display = 'block'
            }else{
                divElement.style.display = 'none'
                buttonText = event.target.textContent = 'Show more'


            }
            
        }
    }

}