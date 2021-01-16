// I can see why most code prefers setTimeout with recursion to setInterval.
// SetInterval requires referencing variables in broader scopes, and it's
// easier to clear the timeout than it is to clear the interval. SetInterval
// really only seems useful for polling where you either don't plan to
// interrupt it, or you only plan to interrupt at a very specific time (which
// requires setTimeout).
var intervalVal = 1;

var hello = ( val, timeoutFunc ) => {
    var timer;

    if ( timeoutFunc === setTimeout ) {
        console.log( '%s. Hello', val );
        timer = timeoutFunc( hello, 1000, val + 1, timeoutFunc );

        if ( val >= 10 ) {
            clearTimeout( timer );
        }
    }
    else {
        // This doesn't work as expected, because setInterval keeps running the
        // value of intervalVal that it was originally instantiated with, not the
        // current value. Too bad javascript doesn't have reference pointers...
        intervalVal++;
        console.log( '%s. Goodbye', val );
    }

}

var timer1 = setTimeout( hello, 1000, 1, setTimeout );
var timer2 = setInterval( hello, 1000, intervalVal );

setTimeout( () => {
    clearInterval( timer2 );
    console.log( 'The actual value of intervalVal is: %s', intervalVal );
}, 10000 );
