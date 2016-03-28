/* Creates archive 'app.zip' containing contents of webpack's output path directory */

var fs = require('fs');
var archiver = require('archiver');
var webpack = require('./webpack.config.js');
var output = fs.createWriteStream('app.zip');
var archive = archiver('zip');

output.on('close', function () {
	console.log(archive.pointer() + ' total bytes');
	console.log(
		'archiver has been finalized and the output file descriptor has closed.');
});

archive.on('error', function (err) {
	throw err;
});

archive.pipe(output);

archive
	.directory(webpack.output.path, 'app/')
	.finalize();