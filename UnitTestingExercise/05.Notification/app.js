function notify(message) {
  let notificationBlockElement = document.getElementById('notification')
  if (typeof message === 'string' || message instanceof String){
    notificationBlockElement.textContent = message
    notificationBlockElement.style.display = 'block'
  }

  notificationBlockElement.addEventListener('click',()=>{
    notificationBlockElement.style.display = 'none'
  })
}