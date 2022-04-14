function solve() {
  let text = document.getElementById("text").value;
  let convention = document.getElementById("naming-convention").value;

  let result = document.getElementById("result");


  if (convention == "Camel Case") {
    let str = "";
    for (let i = 0; i < text.length; i++) {
      let element = text[i];
      if (element == " ") {
        element = text[i + 1];
        str += element.toUpperCase();
        i++;
      } else {
        str += element.toLowerCase();
      }
    }

    result.textContent = str;
  } else if (convention == "Pascal Case") {
    let str = "";
    for (let i = 0; i < text.length; i++) {
      let element = text[i];
      if (element == " ") {
        element = text[i + 1];
        str += element.toUpperCase();
        i++;
      } else {
        str += element.toLowerCase();
      }
    }
    str = str.charAt(0).toUpperCase() + str.substring(1);
    result.textContent = str;
  } else {
    result.textContent = "Error!";
  }
}
