const start = Date.now();

console.log('starting timer...');

setTimeout(() => {
    const millis = Date.now() - start;

    console.log(`seconds elapsd = ${Math.floor(millis/1000)}`);

}, 2000);