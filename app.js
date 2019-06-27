let  http = require('http')//引入http模块
// 创建自己的第一个服务器
// createServer是创建服务器的函数里面是一个回调函数，这个函数有两个参数：req，res
// req： request 请求
// res：response 响应
let server = http.createServer((req,res)=>{
    // 给前端的响应,里面传的值需要是json（或字符串）格式，一般用json格式
    res.end('hello word')
})
// 开启端口号 
// listen:表示监听的端口号，参数1：端口号，参数2：（可选参数）可以跟一个回调函数
server.listen(3000,function(){
    console.log('3000启动成功')
})
// 访问localhost:3000 或 127.0.0.1：3000
// 作业：?name =1&age =2&c =3 => {name:1,age:2,c:3}
// 把id为1的name：改为香蕉
