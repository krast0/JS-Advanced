const {expect} = require('chai')
const {lookupChar} = require('./CharLookup')

describe('Looking up a character',()=>{
    it('first param is not a string',()=>{
        expect(lookupChar(2,3)).to.be.undefined
    })
    it('second param is not a number',()=>{
        expect(lookupChar('duma','3')).to.be.undefined
    })
    it('index is bigger than string length',()=>{
        expect(lookupChar('duma',5)).to.equal("Incorrect index")
    })
    it('index is negative number',()=>{
        expect(lookupChar('duma',-2)).to.equal("Incorrect index")
    })
    it('empty string',()=>{
        expect(lookupChar('duma',-2)).to.equal("Incorrect index")
    })
    it('returns the right char from index',()=>{
        expect(lookupChar('duma',2)).to.equal("m")
    })
    it('uses float-point number as indes',()=>{
        expect(lookupChar('duma',1.5)).to.be.undefined
    })
    
})