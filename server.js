var http = require('http')
var fs = require('fs')
var url = require('url')

//console.log(Object.keys(http))
var port = process.env.PORT || 8888;

var server = http.createServer(function(request, response){

  var temp = url.parse(request.url, true)
  var path = temp.pathname
  var query = temp.query
  var method = request.method

  //从这里开始看，上面不要看
  if(path){
    var string = fs.readFileSync("./index.html")
    response.setHeader('Content-Type','text/html; charset="utf-8"')
    response.end(string)
  }else if(path ==='/page.html'){
    var string = fs.readFileSync("./page.html")
    response.setHeader('Content-Type','text/html; charset ="utf-8"')
    response.end("i am wrong")
  }

  // 代码结束，下面不要看
  console.log(method + ' ' + request.url)
})

server.listen(port)
console.log('监听成功，请打开 http://localhost:' + port)
