//spec
var XLSX = require('xlsx');

describe('Data driven test from excel', function() {
    
    it('Test to add one and two', function() {
        var workbook = XLSX.readFile('../tests/testData.xlsx');
        var worksheet = workbook.Sheets['Sheet1'];
        // var cell = 'A2';
        // console.log("vale is A2 cell is:" + worksheet[cell].v);
        
        //convert xlsx to json
        var a = XLSX.utils.sheet_to_json(worksheet); //store json data to a vaiable

        a.forEach(function(data) {
            console.log("values in firstNum are : " + data.first); //prints a column values
        });
    });
        
});
    