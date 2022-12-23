const http = require('http');
const fs = require('fs');
const path = require('path')


const indexHtmlFile = fs.readFileSync(path.join(__dirname, 'static', 'index.html'));
const styleFile = fs.readFileSync(path.join(__dirname, 'static', 'style.css'));
const jsFile = fs.readFileSync(path.join(__dirname, 'static', 'js.js'));


const server = http.createServer((req, res)=>{
switch(req.url) {
   case '/': return res.end(indexHtmlFile);
   case '/style.css': return res.end(styleFile);
   case '/js.js': return res.end(jsFIle);
}
    res.statusCode = 404;
    return res.end('Error 404');
})

server.listen(3000);

const { Server } = require("socket.io");
const io = new Server(server);

io.on('connection', (socket)=>{
    console.log('a user connected. id - ' + socket.id) ;
})