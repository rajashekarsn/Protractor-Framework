let homepage = function(){
    let firstNumber = element(by.model('first'));
    let secondNumber = element(by.model('second'));
    let goButton = element(by.id('gobutton'));
    let latestRes = element(by.className('ng-binding'));
    
    // function add( a, b ) {
    //     firstNumber.sendKeys(a);
    //     secondNumber.sendKeys(b);
    //     // browser.sleep(10000);
    //     goButton.click();

    // };
    this.get = function(url){
        browser.get(url);
    };

    this.enterFirstNum = function(firstnNo){
        firstNumber.sendKeys(firstnNo);
    };
    this.secondNumber = function(secondNo){
        secondNumber.sendKeys(secondNo);
    };
    this.clickGO = function(){
        goButton.click();
    };
    this.verifyResult = function(result){
        expect(latestRes.getText()).toEqual(result);
    };

};

module.exports = new homepage();