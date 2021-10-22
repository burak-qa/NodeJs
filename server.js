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

/* //server.js
const http = require('http'),

makeServer = function (request,response){
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.write('Hello world Burak');
    response.end();
},

server = http.createServer(makeServer);

server.listen(3300,()=>{
    console.log('Node server created at port 3300');
}); */

/* //server.js
const http = require('http'),
    url = require('url'),

makeServer = function (request,response){
let path = url.parse(request.url).pathname;
console.log(path);
if(path === '/'){
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.write('Hello world');
}
else if(path === '/about'){
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.write('About page');
}
else if(path === '/blog'){
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.write('Blog page');
}
else{
    response.writeHead(404,{'Content-Type':'text/plain'});
    response.write('Error page');
}
response.end();
},
server = http.createServer(makeServer);
server.listen(3300,()=>{
console.log('Node server created at port 3300');
});
 */

//server.js
const express = require("express"),
    server = expres();
server.set ("port", process.env.PORT || 3000);

//Basic routes
server.get("/", (request, response)=>{
    response.send("Home page");
});

server.get("/about",(request,response)=>{
    response.send("About page");
});

//Express error handling middleware
server.use((request,response)=>{
    response.type("text/plain");
    response.status(505);
    response.send("Error page");
});

//Binging to a port
server.listen(300, ()=>{
    console.log("Express server started at port 3000");
});
