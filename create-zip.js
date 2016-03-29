var crypto = require('crypto');
var fs = require('fs');
var JSZip = require('jszip');
var version = require('./package.json').version;
var cheerio = require('cheerio');


function readFile (filename, opt) {
	return new Promise(function(resolve, reject) {
		fs.readFile(filename, opt, function(err, content) {
			if(err) {
				reject(err);
			} else {
				resolve({filename: filename, content: content});
			}
		});
	});
}


var zip = new JSZip();
var filenames = ['build/bundle.js', 'build/vendor.js'];
var hashedFilenames = {};

var promises = filenames.map(function(filename) {
	return readFile(filename);
});

Promise.all(promises)
	.then(function(data){
		data.forEach(function(d) {
			var hash = crypto.createHash('md5').update(d.content).digest('hex');
			var filename = d.filename.replace(/(build\/)(\w*)(.*$)/,'$2-'+hash+'$3');
			zip.file(filename, d.content);
			hashedFilenames[d.filename.replace(/(build\/)(\w*)(.*$)/,'$2')] = filename;
		});
		return readFile('app/index.html', 'utf8');
	})
	.then(function(data) {
		$ = cheerio.load(data.content);
		Object.keys(hashedFilenames).forEach(function(key) {
			var query = 'script[data-js-name="' + key + '"]';
			$(query).attr('src', hashedFilenames[key]);
		});
		var html = $.html();
		zip.file('index.html', html);
		return readFile('web.xml', 'utf8');
	})
	.then(function(webXML) {
		zip.folder('WEB-INF').file(webXML.filename, webXML.content);
		var buffer = zip.generate({type: "nodebuffer"});
		fs.writeFile("app-"+version+".war", buffer, function (err) {
			if (err) throw err;
			console.log('done');
		});
	})
	.catch(function(err) {
		throw err;
	});
