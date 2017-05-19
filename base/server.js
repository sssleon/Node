var http=require('http');
var url=require('url');

http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.end('Hello World\n');
}).listen(8888);

function onRequet(request,response){
    var pathname=url.parse(request.url).pathname;
    console.log(pathname);
    //获取连接地址带的参数
    //http://localhost:8888/start?foo=bar&hello=world
    //querystring(string)["foo"]
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write("Hello world");
    response.end();
}

http.createServer(onRequet).listen(8889);

console.log('Server running at http://127.0.0.1:8888/');