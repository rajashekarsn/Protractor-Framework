// spec.js
describe('Protractor Demo App', function () {
    it('should add one and two', function () {
        browser.get('http://juliemr.github.io/protractor-demo/');
        browser.sleep(2000);
        element(by.model('first')).sendKeys(1);
        browser.sleep(2000);
        element(by.model('second')).sendKeys(2);
        browser.sleep(3000);
        gobtn = element(by.id('gobutton'))
        browser.sleep(3000);
            //   element(by.id('gobutton')).click();
        gobtn.click();
        browser.sleep(3000);
        expect(element(by.binding('latest')).getText()).
            toEqual('5'); // This will fail. Change to 3, to pass.
    });

});