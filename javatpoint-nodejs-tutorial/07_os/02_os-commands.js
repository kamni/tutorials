const os = require( 'os' );

// The example just prints [ [Object], [Object] ], not what's on the example
// in the web page...
console.log( 'os.cpus(): %s', os.cpus() );

console.log( 'os.arch(): %s', os.arch() );

// The example just prints { lo: [Array], eth0: [Array] }, and not what's on
// the example in the web page...
console.log( 'os.networkInterfaces(): %s\n\n', os.networkInterfaces() );


/*---------------------------------------------------------------------------*/


// How to fix the problem: https://stackoverflow.com/a/38768951
const util = require( 'util' );

console.log( 'os.cpus(): %s', util.inspect( os.cpus(), { depth: null } ) );
console.log( 'os.networkInterfaces(): %s', util.inspect( os.networkInterfaces(), { depth: null } ) );
