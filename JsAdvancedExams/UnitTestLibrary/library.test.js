const { expect } = require("chai");


const { library } = require("./library")

describe('Test',()=>{
        describe('calcPriceOfBook tests',()=>{
            it('throws an error with invalid string or num',()=>{
                expect(() => library.calcPriceOfBook(5,1)).to.throw("Invalid input")
                expect(() => library.calcPriceOfBook("Troy",'1')).to.throw("Invalid input")
                expect(() => library.calcPriceOfBook(['SomeBook'],1)).to.throw("Invalid input")
                expect(() => library.calcPriceOfBook({somebook:'SomeBook'},1)).to.throw("Invalid input")
                expect(() => library.calcPriceOfBook('Troy',1.5)).to.throw("Invalid input")
            })
            it(`happy path`,()=>{
                expect(library.calcPriceOfBook('Troy',2002)).to.equal(`Price of Troy is 20.00`)
                expect(library.calcPriceOfBook('Troy',1980)).to.equal(`Price of Troy is 10.00`)
                expect(library.calcPriceOfBook('Troy',1970)).to.equal(`Price of Troy is 10.00`)
                expect(library.calcPriceOfBook('Troy',0)).to.equal(`Price of Troy is 10.00`)
                expect(library.calcPriceOfBook('Troy',2070)).to.equal(`Price of Troy is 20.00`)



            })
            
        })
        describe('findBook function works',()=>{
            it(`throws an error if 0 elements in array`,()=>{
                expect(() => library.findBook([],'Troy')).to.throw("No books currently available" )
                expect(() => library.findBook([],'')).to.throw("No books currently available" )
            })
            it(`throws an error if 0 elements in array`,()=>{
                expect(() => library.findBook([],'Troy')).to.throw("No books currently available" )
                expect(() => library.findBook([],'')).to.throw("No books currently available" )
            })
            it(`returns that book is found or not found`,()=>{
                expect(library.findBook(['Troy','Torronto','Firestarter','Metro2033'],'Metro2033')).to.equal("We found the book you want.")
                expect(library.findBook(['Metro2033'],'Metro2033')).to.equal("We found the book you want.")
                expect(library.findBook(['Troy','Torronto','Firestarter','Metro2033'],'Metro2034')).to.equal("The book you are looking for is not here!")



            })
        })
        describe('test for arrangeTheBooks function',()=>{
            it(`throws an error if parameter is not an interger or is negative num`,()=>{
                expect(()=> library.arrangeTheBooks('1')).to.throw("Invalid input")
                expect(()=> library.arrangeTheBooks([1,2,3])).to.throw("Invalid input")
                expect(()=> library.arrangeTheBooks({1:1})).to.throw("Invalid input")
                expect(()=> library.arrangeTheBooks(-1)).to.throw("Invalid input")
                expect(()=> library.arrangeTheBooks(1.5)).to.throw("Invalid input")
            })
            it(`succseeds getting all books in place on the shelves`,()=>{
                expect(library.arrangeTheBooks(40)).to.equal("Great job, the books are arranged." )
                expect(library.arrangeTheBooks(1)).to.equal("Great job, the books are arranged." )
                expect(library.arrangeTheBooks(0)).to.equal("Great job, the books are arranged." )
            })
            it(`doesent have enough space for all the books`,()=>{
                expect(library.arrangeTheBooks(41)).to.equal("Insufficient space, more shelves need to be purchased.")
                expect(library.arrangeTheBooks(100)).to.equal("Insufficient space, more shelves need to be purchased.")
                expect(library.arrangeTheBooks(45)).to.equal("Insufficient space, more shelves need to be purchased.")
            })
        })
})