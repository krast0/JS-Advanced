const { expect } = require("chai");
const { isOddOrEven } = require("./EvenOrOdd");

describe("Test if length of string is odd or even", () => {
  it("should be undefined if not string", () => {
    expect(isOddOrEven(2)).to.be.undefined;
  });
  it('should be undefined if its array',()=>{
    expect(isOddOrEven(['2','3','4'])).to.be.undefined
  })
  it('should be undefined if its object',()=>{
    expect(isOddOrEven({'object': 'something'})).to.be.undefined
  })
  it('should be even if its even',()=>{
    expect(isOddOrEven('2222')).to.equal('even')
  })
  it('should be odd if its odd',()=>{
    expect(isOddOrEven('222')).to.equal('odd')
  })
});
