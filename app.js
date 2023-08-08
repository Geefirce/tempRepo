const http = require('http');

 const server = http.createServer((req,res)=>{



   if(req.url === '/'){
    res.end('welcome to the home page')

   }
   if(req.url === '/about') {
    res.end('Here is our short History');

   }
    res.end(` 
    <h1>Ooops!</h1>
    
    <p> we cant seem to find the page you are loking for</p>
    <a href="/">back to home</a>`
    )
 })

  server.listen(4300, ()=>{
    console.log('server is listenig')
  });