var http = require('http')
var fs = require('fs')
var url = require('url')

http.createServer((req,res)=>{

    var q = url.parse(req.url,true);

    if(q.pathname === '/'){

        fs.readFile('./index.html',(err,data)=>{
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(data)
            res.end()
        })

    }else if(q.pathname==='/signup'){
        
        fs.readFile('./signup.html',(err,data)=>{
            res.writeHead(200,{"Content-Type":"text/html"})
            res.write(data)
            res.end()
        })

    }else if(q.pathname === '/signupaction'){
        res.writeHead(200,{"Content-Type":"text/html"})
        res.write('<h1>'+q.query.fname+'</h1>')
        res.end()
    }else{
        res.writeHead(404,{"Content-Type":"text/html"})
        res.write("error")
        res.end()
    }
    
}).listen(7000,()=>console.log("Server started"))