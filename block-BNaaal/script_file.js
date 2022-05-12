var http=require('http');

// var server=http.createServer(handleRequest);

// function handleRequest(res,req)
// {
//     res.end('welcome home');
// }

// server.listen(4000,'localhost');

http.createServer((request, response)=>
{
    response.end('welcome home');
}).listen(4000,'localhost');