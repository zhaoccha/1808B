let path = require('path');
let fs = require('fs');
let fsPromise = fs.promises;
let fileName = path.join(__dirname,'fritue.json')
fsPromise.readFile(fileName,'utf-8').then(data =>{
    data = JSON.parse(data);  // 转成可操作的对象
    for(let key in data){
        if(data[key].id ==1){
            data[key].name ='香蕉'
        }
    }
    // console.log(data);//读出来的是json文件
  
   
    data.push({
        id:2,
        name:'橘子'
    })  
    // 写入数据的是后要把对象转成json  
    fsPromise.writeFile(fileName,JSON.stringify(data),'utf-8');  
})


//新建文件夹
// let fs = require('fs');
// fs.mkdir('abc',function(err){

// })