/**
 * Yes, we already figured this out in example 01, but to run this script:
 *
 *     node 02_server.js
 *
 * You'll find this running at http://localhost:8081 in your browser.
 **/

var http = require("http");

// Woot! Node supports the newer ecmascript function syntax!
http.createServer( (request, response) => {
    response.writeHead( 200, { 'Content-Type': 'text/plain' } );

    // Well, this is annoying...it apparently escapes HTML brackets and
    // output. Okay, good from a security perspective, but how do I get it to
    // render a header??
    //
    // Also, I notice that node doesn't seem to have a filesystem event
    // listener that automatically reloads on change, so I have to restart the
    // server. Good to know.
    response.end( '<h1>Another Obligatory Hello World</h1>\n' );
}).listen( 8081 );

console.log( 'Server running at http://localhost:8081' );
