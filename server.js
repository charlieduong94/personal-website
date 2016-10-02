require('app-module-path').addPath(__dirname);
require('marko/node-require').install();
require('lasso/node-require-no-op').enable('.less', '.css');

const express = require('express');
const compression = require('compression');
const serveStatic = require('serve-static');

require('marko/browser-refresh').enable();
require('lasso/browser-refresh').enable('*.marko *.css *.less');

require('lasso').configure({
    plugins: [
        'lasso-less', // Allow Less files to be rendered to CSS
        'lasso-marko' // Allow Marko templates to be compiled and transported to the browser
    ],
    outputDir: __dirname + '/static', // Place all generated JS/CSS/etc. files into the "static" dir
    bundlingEnabled: false, // Only enable bundling in production
    minify: false, // Only minify JS and CSS code in production
    fingerprintsEnabled: false// Only add fingerprints to URLs in production
});


let app = express();
//app.use(favicon(__dirname + '/assets/img/favicon.ico'));

app.get('/', require('src/pages/home'));

app.get('/robots.txt', function(req, res){
  res.sendFile(__dirname + '/robots.txt');
});

app.use('/assets', express.static(__dirname + '/assets'));
app.use('/static', serveStatic(__dirname + '/static'));

// handle any errors with some middleware
// app.use(function(req,res){
//   res.sendFile(__dirname + '/404.html');
// });


var port = process.argv[2] || 8080;

app.listen(port, function(){
    console.log("Server is listening on port " + port + "...");
    if (process.send) {
        process.send('online');
    }
});
