let fs = require('fs');
let path = require('path')//写绝对路径必须引入path
let fsPromise = fs.promises;//node 10版本以上
// 读取文件readFile
// 参数1 文件路径 ，读取格式
// fsPromise.readFile('./app.js','utf-8').then(data =>{
//     console.log(data)
// })
// 读取绝对路径
fsPromise.readFile(path.join(__dirname,'app.js'),'utf-8').then(data =>{
    console.log(data)
})
// 写入文件writeFile()参数1要写入的文件路径，参数2要写入的数据，参数3写入的数据格式
fsPromise.writeFile('./a.txt','你好，我是写入的内容','utf-8').then(data =>{
    console.log('写入成功')
})
fsPromise.readFile(path.join(__dirname,'fritue.json'),'utf-8').then(data =>{
   
    console.log( JSON.parse(data))
})