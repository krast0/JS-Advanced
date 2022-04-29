function create(words) {
   let sections = words
   let contentElement = document.getElementById("content")
   for (const element of sections) {
      let p = document.createElement('p')
      let div = document.createElement('div')
      p.textContent = element
      div.appendChild(p)
      contentElement.appendChild(div)
      p.style.display = 'none'
      console.log(div);
      div.addEventListener('click', () => {
         p.style.display = 'block'
      })
   }

   
}