var http=require('http')

http.createServer((req, res)=>
{
if(req.method==='GET' && req.url==='/')
{
    res.setHeader('content-type', 'text/html');
    res.write("<h1>welcome to homepage<h1>")
    res.end(); 
}
else if(req.method==='GET' && req.url==='/about')
{
    res.setHeader('content-type', 'text/html');
    res.write("<h1>this is all about node JS<h1>")
    res.end(); 
}
else if(req.method==='POST' && req.url==='/')
{
    res.setHeader('content-type', 'text/html');
    res.write("<h1>this is post request<h1>")
    res.end(); 
}
   
}).listen(4000,'localhost');


