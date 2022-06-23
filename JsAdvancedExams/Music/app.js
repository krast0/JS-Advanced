window.addEventListener("load", solve);

function solve() {
    let sum = 0
  let input = {
    genre: document.getElementById("genre"),
    name: document.getElementById("name"),
    author: document.getElementById("author"),
    date: document.getElementById("date"),
  };

  let addButton = document.getElementById("add-btn");

  addButton.addEventListener("click", Add);

  function Add(e) {
    
    e.preventDefault();

    if(input.genre.value == ""|| input.name.value == ""|| input.author.value == "" || input.date.value == ""){
        return
    }

    let values ={
        genere: input.genre.value,
        name: input.name.value,
        author: input.author.value,
        date: input.date.value,
    }

    let divElement = document.querySelector('.all-hits-container')
    let divToBeAdded = document.createElement('div')
    divToBeAdded.className = 'hits-info'
    divToBeAdded.innerHTML = `
    <img src="./static/img/img.png">
    <h2>Genre: ${values.genere}</h2>
    <h2>Name: ${values.name}</h2>
    <h2>Author: ${values.author}</h2>
    <h3>Date: ${values.date}</h3>
    <button class="save-btn">Save song</button>
    <button class="like-btn">Like song</button>
    <button class="delete-btn">Delete</button>
    `
    divElement.appendChild(divToBeAdded)

    input.genre.value = ''
    input.name.value = ''
    input.author.value = ''
    input.date.value = ''

    let saveBtn = divToBeAdded.querySelector('.save-btn')
    let likeBtn = divToBeAdded.querySelector('.like-btn')


    saveBtn.addEventListener('click',save)
 
    function save() {
        
        let savedSongs = document.querySelector('#saved-hits .saved-container')
        let div = document.createElement('div')
        div.className = 'hits-info'
        div.innerHTML = `<img src="./static/img/img.png">
        <h2>Genre: ${values.genere}</h2>
        <h2>Name: ${values.name}</h2>
        <h2>Author: ${values.author}</h2>
        <h3>Date: ${values.date}</h3>
        <button class="delete-btn">Delete</button>
        `
        console.log(div);
        savedSongs.appendChild(div)

        let deleteBtn = div.querySelector('.delete-btn')
        deleteBtn.addEventListener('click',deleteSong)

        divToBeAdded.remove()
       


    }

    likeBtn.addEventListener('click',like)

    function like(e) {
        
        let parargraph = document.querySelector('#total-likes .likes p')
        sum++
        parargraph.textContent = `Total Likes: ${sum}`
        likeBtn.disabled = true
    }

    let deleteBtn = divToBeAdded.querySelector('.delete-btn')
    console.log(deleteBtn);
    deleteBtn.addEventListener('click',deleteSong)


  }
  function deleteSong(event){
    console.log(event.target.parentElement.remove());
}
}
