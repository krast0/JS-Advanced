function solution() {
  let availableIngredients = {
    carbohydrate: 0,
    fat: 0,
    protein: 0,
    flavour: 0,
  };

  const recipes = {
    apple: { carbohydrate: 1, flavour: 2 } ,
    lemonade: { carbohydrate: 10, flavour: 20 } ,
    burger: {carbohydrate: 5,fat: 7,flavour: 3},
    eggs: {protein: 5,fat:1,flavour:1} ,
    turkey: {protein: 10,carbohydrate:10,fat:10,flavour:10}
  }

  const commands = {
    restock,
    prepare,
    report,
  };
  return manager;

  function manager(string) {
    let [command, param, value] = string.split(" ");
    return commands[command](param, value);
  }
  function report(params) {
    return `protein=${availableIngredients.protein} carbohydrate=${availableIngredients.carbohydrate} fat=${availableIngredients.fat} flavour=${availableIngredients.flavour}`
  }

  function restock(type, qty) {
    availableIngredients[type] += Number(qty);


    return "Success";
  }

  function prepare(recipe, qty) {

    qty = Number(qty)

    const elements = Object.entries(recipes[recipe])
    elements.forEach(ingredient => ingredient[1] *= qty)
    for (const el of elements) {
      let ingr = el[0]
      let qtyOfIngr = Number(el[1])

      if(availableIngredients[ingr] < qtyOfIngr){
        return `Error: not enough ${ingr} in stock`;
      }


    }

elements.forEach(([ingridient,requaried]) => availableIngredients[ingridient] -= Number(requaried))
    return 'Success'
    
  
}
}

let manager = solution();
console.log(manager("prepare turkey 1"));
console.log(manager("restock protein 10"))
console.log(manager("prepare turkey 1"))
console.log(manager("restock carbohydrate 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare turkey 1"));
console.log(manager('restock flavour 10'));
console.log(manager('prepare turkey 1'));
console.log(manager('report'));



