const fs = require('fs');

const nodeStyleCallback = ( err, data ) => {
  if ( err ) {
    console.error( 'There was an error: ', err )
    return;
  }

  console.log( data );
}

fs.readFile( 'does-not-exist.txt', nodeStyleCallback );
fs.readFile( '02_text.txt', nodeStyleCallback );
