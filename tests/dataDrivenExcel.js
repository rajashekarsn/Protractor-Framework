var xl = require('../tests/XLReader');

describe('Data driven test from excel', function() {
    var Test_Data = xl.read_from_XL('Sheet1','../tests/testData.xlsx')
    Test_Data.forEach(function(data){
        
        it('Test to add one and two', function() {
            browser.get('http://juliemr.github.io/protractor-demo/');
            element(by.model('first')).sendKeys(data.first);
            element(by.model('second')).sendKeys(data.second);
        
            element(by.id('gobutton')).click();
            browser.sleep(2000);
            
            expect(element(by.binding('latest')).getText()).
                toEqual(String(data.result));
            browser.sleep(2000);
        });
    });
        
        
});