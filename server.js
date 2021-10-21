/* //server.js
const http = require('http'),
    server = http.createServer();

server.on('request',(request,response)=>{
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.write('Hello world Burak');
    response.end();
});

server.listen(3300,()=>{
    console.log('Node server created at port 3300');
}); */

//server.js
const http = require('http'),

makeServer = function (request,response){
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.write('Hello world Burak');
    response.end();
},

server = http.createServer(makeServer);

server.listen(3300,()=>{
    console.log('Node server created at port 3300');
});