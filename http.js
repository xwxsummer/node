var http = require('http');

http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type':'text / plain'});
    res.write("hello world node");
    res.end();
}).listen(8080,'127.0.0.1')
console.log("listen to 127.0.0.1:8080")

