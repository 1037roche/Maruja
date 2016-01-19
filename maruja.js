var fs = require('fs');
var moment = require('moment');

var maruja = module.exports = {};

maruja.stream = function (config) {

	config = config || {};
	config.file = config.file || 'node.log';

	// existence of the file
	if(!existFile(config.file))
	{
		createFile(config.file, 'texto de pruebas');
	}

/*
	fs.readFile(config.file, 'utf8', function (err,data) {
	  if (err) {
	    return console.log(err);
	  }
	  console.log(data);
	});

*/
		var stat =  fs.statSync(config.file);
		console.log(stat);


};

function existFile(file) {
    try
    {
        return fs.statSync(file).isFile();
    }
    catch (err)
    {
    	return false;
    }
}

function createFile(nameFile, text) {
	try
	{
		fs.writeFile(nameFile, text);
		return true;
	}
	catch(e)
	{
		return false;
	}
}