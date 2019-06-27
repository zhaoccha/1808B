let path = require('path');
__dirname;
console.log(__dirname);//绝对路径
// D:\myDemo2\Practice\node基础
let r = path.resolve(__dirname,'app.js');//可以在多拼接一层
let r = path.resolve(__dirname,'/a','app.js')//  a/app.js
// let r1 = path.join(__dirname,'app.js')
console.log(r)//D:\myDemo2\Practice\node基础\app.js