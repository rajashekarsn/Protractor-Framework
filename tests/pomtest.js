// spec.js, POM test
let homepage = require('../pages/homepage');
describe('Protractor Demo App', function() {
    it('should add one and two', function() {
        //   browser.get('http://juliemr.github.io/protractor-demo/');
        homepage.get('http://juliemr.github.io/protractor-demo/');
        //   element(by.model('first')).sendKeys(1);
        homepage.enterFirstNum('1');
        //   element(by.model('second')).sendKeys(2);
        homepage.secondNumber('2');
        //   element(by.id('gobutton')).click();
        homepage.clickGO();
        browser.sleep(10000);
        // homepage.sleep(2000);
        homepage.verifyResult('3');
        //   expect(element(by.binding('latest')).getText()).
        //       toEqual('3); 
    });

});