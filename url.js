
let url = require('url');
let str = 'http://www.zcc.com/user?name =1';//定义地址
let result = url.parse(str,true);
// true:属性可以将name = 1 =>转为{name:1}
// 加true属性会把查询字符串属性转为对象
console.log(result);
// protocol: 'http:'协议
// host: ,域名，带端口号
// hostname：域名' www.zcc.com'
//  search: '?name%20=1',
// search：带问号的查询参数
// ****query：不带问号的查询参数
// **** pathname访问的路径