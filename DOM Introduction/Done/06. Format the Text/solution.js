function solve() {
  let text = document.querySelector('textarea').value
  let outputArea = document.getElementById('output')
  let splitted = text.split('.').filter(x => x !== '')
  while(splitted.length > 0){
    let text2 = splitted.splice(0,3).join('. ')
    let p = document.createElement('p')
    p.textContent = text2 + '.'
    outputArea.appendChild(p)
    
  }

}