class VegetableStore {
  constructor(owner, location) {
    this.owner = owner;
    this.location = location;
    this.availableProducts = [];
  }

  loadingVegetables(vegetables) {
    let listOfProducts = [];
    for (const product of vegetables) {
      let [productName, productQuantity, productPrice] = product.split(" ");

      productQuantity = Number(productQuantity);
      productPrice = Number(productPrice);

      let found = this.availableProducts.find(
        (pro) => pro.productName == productName
      );

      if (found) {
        found.productQuantity += productQuantity;
        if (productPrice > found.productPrice) {
          found.productPrice = productPrice;
        }
      } else {
        this.availableProducts.push({
          productName,
          productQuantity,
          productPrice,
        });
        listOfProducts.push(productName);
      }
    }

    return `Successfully added ${listOfProducts.join(", ")}`;
  }

  buyingVegetables(selectedProducts) {
    let cost = 0.0;
    for (const product of selectedProducts) {
      let [productName, productQuantity] = product.split(" ");
      productQuantity = Number(productQuantity);
      let found = this.availableProducts.find(
        (f) => f.productName == productName
      );
      if (found) {
      } else {
        throw new Error(
          `${productName} is not available in the store, your current bill is ${
            "$" + cost.toFixed(2)
          }.`
        );
      }

      if (productQuantity > found.productQuantity) {
        throw new Error(
          `The quantity ${productQuantity} for the vegetable ${productName} is not available in the store, your current bill is ${
            "$" + cost.toFixed(2)
          }.`
        );
      }
      cost += productQuantity * found.productPrice;
      this.availableProducts.productQuantity = found.productQuantity -=
        productQuantity;
    }
    return `Great choice! You must pay the following amount ${
      "$" + cost.toFixed(2)
    }.`;
  }

  rottingVegetable(type, quantity) {
    let found = this.availableProducts.find((f) => f.productName == type);

    if (!found) {
      throw new Error(`${found.productName} is not available in the store.`);
    }

    if (quantity > found.productQuantity) {
      found.productQuantity = 0;

      return `The entire quantity of the ${found.productName} has been removed.`;
    }
    found.productQuantity -= quantity;
    return `Some quantity of the ${type} has been removed.`;
  }

  revision() {
    let array = [];
    let sorted = this.availableProducts.sort(
      (a, b) => a.productPrice - b.productPrice
    );
    array.push("Available vegetables:");
    for (const el of sorted) {
      array.push(
        `${el.productName}-${el.productQuantity}-${"$" + el.productPrice}`
      );
    }
    array.push(
      `The owner of the store is ${this.owner}, and the location is ${this.location}.`
    );
    return array.join("\n");
  }
}
let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(
  vegStore.loadingVegetables([
    "Okra 2.5 3.5",
    "Beans 10 2.8",
    "Celery 5.5 2.2",
    "Celery 0.5 2.5",
  ])
);
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());
