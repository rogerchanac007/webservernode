const http = require("http")

http.createServer((request, response)=>{
    console.log(request)
    response.write("Hola Mundo")
    response.end()
}).listen(8080)