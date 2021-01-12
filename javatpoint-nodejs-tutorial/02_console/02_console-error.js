try {
    var err = new Error( "These aren't the droids you're looking for.");
    console.error( err );
}
catch ( err ) {
    // Using console.error apparently circumvents the try-catch, and this is
    // never reached. Why?
    console.log( "These aren't the droids we're looking for." );
}
finally {
    // But it does hit the finally block...
    console.log( 'Move along.' );
}
