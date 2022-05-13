var http=require('http')
var fs=require('fs')

http.createServer((req, res)=>
{
    if(req.method==='GET' && req.url==='/file')
    {
      fs.readFile('./node.html',(error, data)=>
      {
          if(error)
          {

            console.log("error occured");
            res.end();
          }
          else if(data)
          {
              res.setHeader('content-type', 'text/html')
            console.log(data);
            res.end(data);
          }
      }) 
    }
    else if(req.method==='GET' && req.url==='/stream')
    {
        fs.createReadStream('./node.html').pipe(res);
    }
}).listen(5555,'localhost');