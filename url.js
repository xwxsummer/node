var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    
    if(req.url!='/favicon.ico'){
        console.log(req.url)//  如果没有拼接地址就会输出：favicon.ico
        var result = url.parse(req.url,true)//第一个参数是地址，第二个参数是true的话表示把get传值换成对象
        console.log(result.query.id)//获取url的get传值
    }
   
    res.writeHead(200, { 'Content-Type': 'text / plain' });
    res.write("hello world node");
    res.end();
}).listen(8080, '127.0.0.1')
console.log("listen to 127.0.0.1:8080")

//安装supervisor ：npm i -g supervisor 代码实时更新
//代替node命令 supervisor url.js