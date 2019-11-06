//spec.js

describe('test to use element.all', function() {
    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var goButton = element(by.id('gobutton'));
    var latestRes = element(by.className('ng-binding'));
    var history = element.all(by.repeater('result in memory')); //repeat over table

    function add( a, b ) {
        firstNumber.sendKeys(a);
        secondNumber.sendKeys(b);
        // browser.sleep(10000);
        goButton.click();

    }
    
    // browser.get and browser.getCurrentUrl()
    beforeEach(function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
        expect(browser.getCurrentUrl()).toBe('http://juliemr.github.io/protractor-demo/');
    });
    
    it('check count of history', function() {
        add(1, 2);
        add(3, 4);

        expect(history.count()).toEqual(2);

        add(5, 6);

        expect(history.count()).toEqual(0); // This is wrong!
    });

});
    