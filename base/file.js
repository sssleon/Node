var fs=require("fs");
//同步读取文件
var data=fs.readFileSync('input.txt');
console.log(data.toString());
//异步读取文件
fs.readFile('input.txt',function(err,data){
    if(err) return console.error(err);
    console.log(data.toString());
});
console.log("不需要等待读取文件执行结束，再执行这层");

fs.open('input.txt','r+',function(err,fd){
    if(err){
        return console.error(err)
    }
    console.log('打开文件成功');
})

fs.stat('input.txt',function(err,stats){
    console.log("是否是文件：" +stats.isFile());
    console.log("是否是目录：" +stats.isDirectory());
})

fs.writeFile('input.txt',"我是通过写入文件内容！",function(err){
    if(err){
        return console.error(err);
    }
    fs.readFile('input.txt',function(err,data){
        if(err){
            return console.error(err);
        }
        console.log("异步读取文件内容："+data.toString());
    })
})
