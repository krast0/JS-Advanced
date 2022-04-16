function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let fieldText = document.getElementById('searchField')
   let tableRowsElements = document.querySelectorAll('tbody tr')
   function onClick() {

      for (let row of tableRowsElements) {
         row.classList.remove('select')
         if(row.value !== '' && row.textContent.includes(fieldText.value)){
            row.className = 'select'
         }
      }
      fieldText.value = ''
   }

}