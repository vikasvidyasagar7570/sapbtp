console.log("start");
setTimeout(()=>{
    console.log("hello");
},5000)
setImmediate(()=>{
    console.log("set immediate");
})
Promise.resolve().then(()=>{
    console.log("promise.then")
})
process.nextTick(()=>{
    console.log("process.next tick")
})
console.log("hi")



const fs = require("fs");
fs.readFile(__filename,()=>{
    setTimeout(()=>{
        console.log("set time")
    },0)
    setImmediate(()=>{
        console.log("set immidiate")
    })
})