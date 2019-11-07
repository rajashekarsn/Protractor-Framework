// to read excel data and conver to json
var XLSX = require('xlsx');

class ReadXL{

    read_from_XL(sheetName, filePath){

        var workbook = XLSX.readFile(filePath);
        var worksheet = workbook.Sheets[sheetName];

        return XLSX.utils.sheet_to_json(worksheet);
    };


};

module.exports = new ReadXL();