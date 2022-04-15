function toggle() {
    let changeTextButton = document.getElementsByClassName('button')[0]
    let hiddenTextElement = document.querySelector('#extra')
    console.log(hiddenTextElement);
    if(changeTextButton.textContent === 'Less'){
        changeTextButton.textContent = 'More'
        hiddenTextElement.style.display = 'none'
    }else{
        hiddenTextElement.style.display = 'block'
        changeTextButton.textContent='Less'
    }
    
}