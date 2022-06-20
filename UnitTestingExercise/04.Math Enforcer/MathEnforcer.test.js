const { expect } = require("chai");
const { mathEnforcer } = require("./MathEnforcer");

describe('returning correct results',()=>{
    it('addFive parameter is string',()=>{
        expect(mathEnforcer.addFive('5')).to.be.undefined
    })
    it('addFive parameter is number',()=>{
        expect(mathEnforcer.addFive(5)).to.equal(10)
    })
    it('addFive parameter is array',()=>{
        expect(mathEnforcer.addFive([2,4,5])).to.be.undefined
    })
    it('addFive to work with negative num',()=>{
        expect(mathEnforcer.addFive(-10)).to.equal(-5)
    })
    it('addFive to work with floating-point num',()=>{
        expect(mathEnforcer.addFive(2.43)).to.be.closeTo(7.43,0.01)
    })
    it('subtractTen parameter is string',()=>{
        expect(mathEnforcer.subtractTen('5')).to.be.undefined
    })
    it('subtractTen parameter is number',()=>{
        expect(mathEnforcer.subtractTen(5)).to.equal(-5)
    })
    it('subtractTen parameter is array',()=>{
        expect(mathEnforcer.subtractTen([2,4,5])).to.be.undefined
    })
    it('subtractTen to work with negative num',()=>{
        expect(mathEnforcer.subtractTen(-10)).to.equal(-20)
    })
    it('subtractTen to work with floating-point num',()=>{
        expect(mathEnforcer.subtractTen(10.10)).to.be.closeTo(0.10,0.01)
    })
    it('sum function parameters are both numbers',()=>{
        expect(mathEnforcer.sum(2,2)).to.equal(4)
    })
    it('sum function parameters are both negative numbers',()=>{
        expect(mathEnforcer.sum(-2,-2)).to.equal(-4)
    })
    it('sum function parameters one negative one positive number',()=>{
        expect(mathEnforcer.sum(4,-2)).to.equal(2)
    })
    it('sum function first param is num but secound is string',()=>{
        expect(mathEnforcer.sum(2,'2')).to.be.undefined
    })
    it('sum function floating-point numbers',()=>{
        expect(mathEnforcer.sum(2.55,2.05)).to.be.closeTo(4.60,0.01)
    })
    it('sum function second param is num but first is string',()=>{
        expect(mathEnforcer.sum('2',2)).to.be.undefined
    })
    it('sum function both param are string',()=>{
        expect(mathEnforcer.sum('2','2')).to.be.undefined
    })
})
