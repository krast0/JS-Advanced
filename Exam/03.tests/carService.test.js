const { expect } = require("chai");
const { carService } = require("./03. Car service_Resources")

describe("Tests …", ()=> { 

    describe("First function", ()=>{ 
 

        it('happy path', ()=>{ 
            expect(carService.isItExpensive('Engine')).to.equal('The issue with the car is more severe and it will cost more money')
            expect(carService.isItExpensive('Transmission')).to.equal('The issue with the car is more severe and it will cost more money')

        }); 
        it('conditions are not met',()=>{
            expect(carService.isItExpensive('Cool')).to.equal(`The overall price will be a bit cheaper`)
        })

     }); 
     describe("discount function",()=>{
        it('happy path',()=>{
            expect(carService.discount(5,100)).to.equal("Discount applied! You saved 15$")
            expect(carService.discount(7,100)).to.equal("Discount applied! You saved 15$")
            expect(carService.discount(10,100)).to.equal("Discount applied! You saved 30$")
            expect(carService.discount(2,100)).to.equal("You cannot apply a discount")
            expect(carService.discount(1,100)).to.equal("You cannot apply a discount")


        })
        it('first parameter or second parameter is not a number',()=>{
            expect(()=> carService.discount('5',1)).to.throw("Invalid input")
            expect(()=> carService.discount('5','1')).to.throw("Invalid input")
            expect(()=> carService.discount(5,'1')).to.throw("Invalid input")
            expect(()=> carService.discount([5],1)).to.throw("Invalid input")
            expect(()=> carService.discount('lol',1)).to.throw("Invalid input")




            
        })
     })
     describe('partsToBuy function',()=>{
        it('happy path',()=>{
            expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }],["blowoff valve", "injectors"])).to.equal(145)
            expect(carService.partsToBuy([{ part: "carburator", price: 10 }],["blowoff valve", "injectors","carburator"])).to.equal(10)
            expect(carService.partsToBuy([{ part: "carburator", price: 10 }],["carburator", "injectors","carburator"])).to.equal(20)
            expect(carService.partsToBuy([{ part: "carburator", price: 10 },{ part: "pedal", price: 20}],["carburator", "pedal"])).to.equal(30)
            expect(carService.partsToBuy([{}],["blowoff valve", "injectors","carburator"])).to.equal(0)
        })
        it('invalid input',()=>{

            expect(() => carService.partsToBuy('[{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }]',["blowoff valve", "injectors"])).to.throw("Invalid input")
            expect(() => carService.partsToBuy(23,43)).to.throw("Invalid input")
            expect(() => carService.partsToBuy({part: 'carborator',price: 23},['carburator'])).to.throw("Invalid input")




        })
     })
 

}); 
