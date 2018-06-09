var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    calculatorDisplay = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(calculatorDisplay.getAttribute('value')).to.eventually.equal('2')
  })


  // do the number buttons work to update the display of the running total?
    it('should update the running total display when buttons are clicked', function(){
      calculatorDisplay = element(by.css('#running_total'))
      element(by.css('#number8')).click();
      element(by.css('#number9')).click();
      element(by.css('#number0')).click();
      expect(calculatorDisplay.getAttribute('value')).to.eventually.equal('890')
    })

  // do each of the arithmetical operations work to update the display with the result of the operation?
  // test that it can add
    it('should be able to add two numbers together', function(){
      calculatorDisplay = element(by.css('#running_total'))
      element(by.css('#number1')).click();
      element(by.css('#operator_add')).click();
      element(by.css('#number4')).click();
      element(by.css('#operator_equals')).click();
      expect(calculatorDisplay.getAttribute('value')).to.eventually.equal('5')
    });

    // test that it can subtract
    it('should be able to subtract two numbers from each other', function(){
      calculatorDisplay = element(by.css('#running_total'))
      element(by.css('#number9')).click();
      element(by.css('#operator_subtract')).click();
      element(by.css('#number3')).click();
      element(by.css('#operator_equals')).click();
      expect(calculatorDisplay.getAttribute('value')).to.eventually.equal('6')
    });



  // can we chain multiple operations together?

  // does it work as expected for a range of numbers? (positive, negative, decimals, very large numbers)



  // exceptional circumstances: if you divide by zero, what is the effect?
  // it returns 'Infinity' (see test below);

  // it('should give error when divided by zero', function(){
  //   runningTotal = element(by.css('#running_total'))
  //   element(by.css('#number6')).click();
  //   element(by.css('#operator_divide')).click();
  //   element(by.css('#number0')).click();
  //   element(by.css('#operator_equals')).click();
  //   expect(runningTotal.getAttribute('value')).to.eventually.equal('Infinity')
  // });

  // exceptional circumstances: can you write a test to describe what you'd prefer to happen, then correct to code to make that test pass.

  it('should give error when divided by zero', function(){
    runningTotal = element(by.css('#running_total'))
    element(by.css('#number6')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_equals')).click();
    expect(runningTotal.getAttribute('value')).to.eventually.equal('Error, can\'t divide by 0')
  });

});
