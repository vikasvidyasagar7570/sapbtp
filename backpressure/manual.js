const fs = require ('fs')
const readable = fs.createReadStream('source.txt',{
    highWaterMark:16 * 1024,
});
const writable = fs.createWriteStream('destination.txt',{
    highWaterMark:8 * 1024,
})

readable.on('data',(chunk)=>{
    const canContinue = writable.write(chunk);
    console.log(`chunk size: ${chunk.length}, canContinue: ${canContinue}`);

    if(!canContinue){
        console.log('backpressure detected. Pausing readable stream ');
        readable.pause();

        writable.once('drain',()=>{
            console.log('drain event fired');
            readable.resume();
        })
    }
})
readable.on('end',()=>{
    writable.end();
    console.log('done')
})