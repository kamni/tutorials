// Bah...it's not proper recursion unless you could possibly overrun the stack
// because it's waiting for others to complete...this is just a loop! :P
var recurse = () => {
    console.log( "Tick, tock!" );
    setTimeout( recurse, 1000 );
}

recurse();
