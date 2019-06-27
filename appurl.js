// url和http模块
let http = require('http');
let url = require('url');
let ary = require('./boor')
console.log(ary)
let server = http.createServer((req,res)=>{
    // 设置一个头，解决中文乱码问题
    res.setHeader('Content-Type','text/plain;charset=utf-8')
    res.setHeader('Content-Type','text/json;charset=utf-8')
// 根据路径不同，返回不同结果
// 请求的路径会放在reqshangmian req.url
// localhost：3000/user?name =1
// /user =>pathname  ?name =1=> query
let {pathname,query}=url.parse(req.url,true)
// 这里的路径必须要加/
// loclahost:3000/user?name=1
if(pathname ==='/user'){
    return res.end('访问的是user');
    console.log(query.name)
}
// // loclahost:3000/admin
if(pathname ==='/admin'){
    return res.end('admin')
}
// loclahost:3000/boor
if(pathname ==='/boor'){
    return res.end(JSON.stringify(ary))
}
res.end('404')
})
server.listen('3001',function(){
    console.log('服务器3001端口启动')
})
// 后台程序，只要代码有改动，必须重新启动