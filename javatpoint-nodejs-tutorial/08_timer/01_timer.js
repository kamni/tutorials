var i = 0;

setInterval( () => {
    i++;
    console.log( 'setInterval: Hey! %s second%s completed...', i, i > 1 ? 's' : '' );
}, 1000 );
