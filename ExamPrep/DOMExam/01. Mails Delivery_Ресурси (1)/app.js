function solve() {
  let addToTheListButtonElement = document.querySelector("#add");
  let resetButtonElement = document.querySelector("#reset");
  let InputTextAreaElement = document.querySelector("#message");
  let recipientNameInputElement = document.querySelector("#recipientName");
  let titleInputElement = document.querySelector("#title");
  let outputMailListElement = document.querySelector(".list-mails #list");
  let sentList = document.querySelector(".sent-list");
  let deletelist = document.querySelector(".delete-list");

  addToTheListButtonElement.addEventListener("click", addMail);

  function addMail(e) {
    e.preventDefault();
    let recipientNameTextInput = recipientNameInputElement.value;
    let titleTextInput = titleInputElement.value;
    let massageTextInput = InputTextAreaElement.value;
    if (
      recipientNameTextInput.length == 0 ||
      titleTextInput.length == 0 ||
      massageTextInput.length == 0
    ) {
      return null;
    }

    let liElement = document.createElement("li");
    let h4ElementTitle = document.createElement("h4");
    h4ElementTitle.innerText = "Title: " + titleTextInput;
    let h4ElementRecipient = document.createElement("h4");
    h4ElementRecipient.innerText = "Recipient Name: " + recipientNameTextInput;
    let massageSpanElement = document.createElement("span");
    massageSpanElement.innerText = massageTextInput;

    let listActionButtons = document.createElement("div");
    listActionButtons.id = "list-action";
    let sendButton = document.createElement("button");
    sendButton.type = "submit";
    sendButton.id = "send";
    sendButton.innerText = "send";
    let deleteButton = document.createElement("button");
    deleteButton.type = "submit";
    deleteButton.id = "delete";
    deleteButton.innerText = "delete";
    listActionButtons.appendChild(sendButton);
    listActionButtons.appendChild(deleteButton);

    liElement.appendChild(h4ElementTitle);
    liElement.appendChild(h4ElementRecipient);
    liElement.appendChild(massageSpanElement);
    liElement.appendChild(listActionButtons);

    outputMailListElement.appendChild(liElement);

    sendButton.addEventListener("click", sendMail);

    function sendMail(e) {
      e.preventDefault();
      let liElement = document.createElement("li");
      let spanRecipient = document.createElement("span");
      let spanTitle = document.createElement("span");
      let listElementTitle = document.querySelectorAll("#list h4")[1];
      let listElementRecipient = document.querySelectorAll("#list h4")[0];
      let divElement = document.createElement("div");
      divElement.className = "btn";
      let buttonDivElement = document.createElement("button");
      buttonDivElement.type = "submit";
      buttonDivElement.class = "delete";
      buttonDivElement.innerText = "Delete";
      spanRecipient.innerText = "To: " + recipientNameTextInput;
      spanTitle.innerText = "Title: " + titleTextInput;
      divElement.appendChild(buttonDivElement);
      liElement.appendChild(spanRecipient);
      liElement.appendChild(spanTitle);
      liElement.appendChild(divElement);
      sentList.appendChild(liElement);
      sendButton.parentElement.parentElement.remove();

      buttonDivElement.addEventListener("click", Delete);
      buttonDivElement.addEventListener("click", deleteEl);
      function deleteEl(e) {
        buttonDivElement.parentElement.parentElement.remove();
      }
    }
    deleteButton.addEventListener("click", Delete);

    function Delete(e) {
      let li = document.createElement("li");
      let span1 = document.createElement("span");
      let span2 = document.createElement("span");
      let takeSpansFromHere =
        deleteButton.parentElement.parentElement.querySelectorAll("h4");
      span1.textContent = takeSpansFromHere[0].textContent;
      span2.textContent = takeSpansFromHere[1].textContent;
      deleteButton.parentElement.parentElement.remove();

      li.appendChild(span1);
      li.appendChild(span2);
      deletelist.appendChild(li);
    }
    titleInputElement.value = "";
    InputTextAreaElement.value = "";
    recipientNameInputElement.value = "";
  }

  resetButtonElement.addEventListener("click", Reset);
  function Reset(e) {
    e.preventDefault();
    titleInputElement.value = "";
    InputTextAreaElement.value = "";
    recipientNameInputElement.value = "";
  }
}
solve();
