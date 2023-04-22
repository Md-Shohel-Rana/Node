const http = require ('http');
const fs = require ('fs');
const PORT=3000;

const handleReadFile =(fileName,statusCode,req,res) =>{

    fs.readFile(fileName,'utf-8',(err,data)=>{
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        res.end();
    });
}

const server=http.createServer((req,res)=>{

    if(req.url==='/'){
        handleReadFile('./views/index.html',200,req,res);
    }
    else if(req.url==='/about'){
        handleReadFile('./views/about.html',200,req,res);
        
    }
    else if(req.url==='/contact'){
        handleReadFile('./views/contact.html',200,req,res);
    }
    else if(req.url==='/service'){
        handleReadFile('./views/service.html',200,req,res);
    }
   else if(req.url==='/skill'){
    handleReadFile('./views/skill.html',200,req,res);
   }
  
 else{
    handleReadFile('./views/error.html',404,req,res);
    };

});
server.listen(PORT,()=>{
    console.log('server running successfully');
});
