const { expect } = require('chai')
const { isSymmetric } = require('./checkForSymmetry')

describe('Symmetry Checker', ()=>{
    it('works with symetric values',()=>{
        expect(isSymmetric([1,2,2,1])).to.be.true
    })
    it('its not an array',()=>{
        expect(isSymmetric('not an array')).to.be.false
    })
    it('its not symetric array',()=>{
        expect(isSymmetric([1,2,3,4,5])).to.be.false
    })
    it('its empty array',()=>{
        expect(isSymmetric([])).to.be.true
    })
    it('its a symmetric string but not array',()=>{
        expect(isSymmetric('1221')).to.be.false
    })
    it('its a odd symetric array',()=>{
        expect(isSymmetric([1,2,1])).to.be.true
    })
    it('its array with strings',()=>{
        expect(isSymmetric(['1','2','1'])).to.be.true
    })
    it('its array with strings and numbers',()=>{
        expect(isSymmetric([1,2,'1'])).to.be.false
    })
});