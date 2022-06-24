class VegetableStore{
    constructor(owner,location){
        this.owner = owner
        this.location - location
        this.availableProducts = []
        
    }

    loadingVegetables (vegetables) {
        let listOfProducts = []
        for (const product of vegetables) {
            let [productName,productQuantity,productPrice] = product.split(' ')

            productQuantity = Number(productQuantity)
            productPrice = Number(productPrice)

            let found = this.availableProducts.find((pro) => pro.productName == productName)

            if(found){
                found.productQuantity += productQuantity
                if(productPrice > found.productPrice){
                    found.productPrice = productPrice
                }
            }else{
                this.availableProducts.push({productName,productQuantity,productPrice})
            }


        }
        for (const el of this.availableProducts) {
            listOfProducts.push(el.productName)
        }

        return `Successfully added ${listOfProducts.join(', ')}`
        
    }


    buyingVegetables (selectedProducts) {
        let cost = 0.00
        for (const product of selectedProducts) {
           
           let [productName,productQuantity] = product.split(' ')
           let found = this.availableProducts.find((f)=> f.productName == productName)
            if(found){

            }else{
                throw new Error(`${productName} is not available in the store, your current bill is ${cost}.` )
            }

            if(productQuantity > found.productQuantity){
                return `The quantity ${productQuantity} for the vegetable ${productName} is not available in the store, your current bill is ${cost}.` 
            }
            cost += productQuantity * found.productPrice
            this.availableProducts.productQuantity = found.productQuantity -= productQuantity
            
        }
        return `Great choice! You must pay the following amount ${'$'+cost.toFixed(2)}.` 
    }


    rottingVegetable (type, quantity) {
        if(found.productQuantity < productQuantity){
            return `The entire quantity of the ${productName} has been removed.`
        }
    }


    revision () {

    }
}
let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia"); 
 console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"])); 
 console.log(vegStore.buyingVegetables(["Okra 1"])); 
 console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"])); 
 console.log(vegStore.buyingVegetables(["Banana 1", "Beans 2"]));  