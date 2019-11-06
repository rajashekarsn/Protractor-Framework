//spec.js
describe('To Test all scenarios ', function() {
    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var goButton = element(by.id('gobutton'));
    var latestRes = element(by.className('ng-binding')); //(by.binding('latest')); latest is present in the source code
    
    beforeEach(function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
    });
    
    it('should add one and two', function() {
        firstNumber.sendKeys(1);
        secondNumber.sendKeys(2);
        goButton.click();
        browser.sleep(10000)
        expect(latestRes.getText()).toEqual('3');
      });

    it('should add 3 and 4', function() {
      firstNumber.sendKeys(3);
      secondNumber.sendKeys(4);
      goButton.click();
      browser.sleep(10000)
      expect(latestRes.getText()).toEqual('7');
    });

    it('should Subtrct one from two', function() {
      browser.get('http://juliemr.github.io/protractor-demo/');
      browser.manage().timeouts().implicitlyWait(30000);
      element(by.model('first')).sendKeys(1);
      element(by.model('second')).sendKeys(2);
      browser.sleep(1000);
      element(by.model('operator')).$('[value = "SUBTRACTION" ]').click(); //  to select drop down options
      element(by.id('gobutton')).click();
      expect(element(by.binding('latest')).getText()).
          toEqual('-1');
    });
});
    