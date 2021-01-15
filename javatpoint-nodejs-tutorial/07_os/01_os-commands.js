const os = require( 'os' );

console.log( 'os.freemem(): %s', os.freemem() );
console.log( 'os.totalmem(): %s', os.totalmem() );
console.log( 'os.loadavg(): %s\n', os.loadavg() );

console.log( 'os.homedir(): %s', os.homedir() );
console.log( 'os.tmpdir(): %s\n', os.tmpdir() );

console.log( 'os.platform(): %s', os.platform() );
console.log( 'os.release(): %s', os.release() );
console.log( 'os.type(): %s\n', os.type() );

console.log( 'os.hostname(): %s', os.hostname() );
console.log( 'os.uptime(): %s', os.uptime() );
console.log( 'os.endianness(): %s', os.endianness() );

