var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

// calculate.add
  it('it should add 1+4 and get 5', function(){
    calculator.previousTotal = 1;
    calculator.add(4);
    assert.equal(calculator.runningTotal, 5);
  })

// calculate.subtract
  it('it should subtract 4 from 7 and get 3', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.equal(calculator.runningTotal, 3);

  })

// calculate.multiply
  it('it should multiply 3 by 5 and get 15', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.equal(calculator.runningTotal, 15);
  })

// calculate.divide
  it('it should divide 21 by 7 and get 3', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.equal(calculator.runningTotal, 3);
  })

// calculate.numberClick
  it('it should concatenate multiple number button clicks', function(){
    calculator.numberClick(5);
    calculator.numberClick(1);
    calculator.numberClick(9);
    assert.equal(calculator.runningTotal, 519);
  })

// calculate.operatorClick
  it('it should chain multiple operations together', function(){
    calculator.operatorClick(calculator.add(6));
    calculator.operatorClick(calculator.add(6));
    assert.equal(calculator.runningTotal, 12);
    calculator.operatorClick(calculator.divide(3));
    assert.equal(calculator.runningTotal, 4);
  })

// calculate.clearClick

  it('it should clear the running total', function(){
    calculator.operatorClick(calculator.add(6));
    calculator.operatorClick(calculator.add(6));
    assert.equal(calculator.runningTotal, 12);
    calculator.clearClick();
    assert.equal(calculator.runningTotal, 0);

  })

});
