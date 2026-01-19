const http  = require('http')
const server = http.createServer((req, res)=>{
res.end('welcome to cap')
const {
    headers,
    url,
    method
}=req;
console.log(headers,url,method);
})
server.listen(3009,()=>{console.log(`listening to port 3009`)})