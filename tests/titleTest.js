// spec.js
describe('Protractor Demo App', function() {
  var firstNumber = element(by.model('first'));
  var secondNumber = element(by.model('second'));
  var goButton = element(by.id('gobutton'));
  var latestResult = element(by.binding('latest'));

  beforeEach(function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('Super Calculator');
    //getText() will not handle getTitle to print the text, use below code to log to console
    browser.getTitle().then(function(webpagetitle){
      if (webpagetitle === 'Super Calculator'){
        console.log(webpagetitle);
      }else{
        console.log('Some Name');
      }
    });
  });
});