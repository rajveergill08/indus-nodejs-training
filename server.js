var http = require('http')

http.createServer(function (req, res) {
    res.end("<h1>Hello Node Server 123</h1>")
}).listen(4000)

console.log("Server is Started on http://127.0.0.1:4000")
