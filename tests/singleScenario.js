// spec.js
describe('Protractor Demo App', function() {
    it('should add one and two', function() {
      browser.get('http://juliemr.github.io/protractor-demo/');
      browser.sleep(3000);
      element(by.model('first')).sendKeys(1);
      browser.sleep(3000);
      element(by.model('second')).sendKeys(2);
      browser.sleep(3000);
      element(by.id('gobutton')).click();
      browser.sleep(2000);
      expect(element(by.binding('latest')).getText()).
          toEqual('3'); // This will fail. Change to 3, to pass.
    });

});