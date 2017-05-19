var fs=require("fs");
var data=fs.readFileSync('input.txt');
console.log(data.toString());
console.log("异步读取文件结束");

fs.readFile('input.txt',function(err,data){
    if(err) return console.error(err);
    console.log(data.toString());
});
console.log("不需要等待读取文件执行结束，再执行这层");
////创建可读流
var readdata='';
//创建可读流
var readerStream=fs.createReadStream('input.txt');
//设置编码
readerStream.setEncoding('UTF8');
//处理流事件
//data - 当有数据可读时触发。
//end - 没有更多的数据可读时触发。
//error - 在接收和写入过程中发生错误时触发。
//finish - 所有数据已被写入到底层系统时触发。
readerStream.on('data',function(chunk){
    readdata+=chunk;
})
readerStream.on('end',function(){
    console.log(readdata);
})
readerStream.on('error',function(err){
    console.log(err.stack);
})
console.log('执行可读流结束');
////创建写入流
var writedata="百度地址www.baidu.com";
var writeStream=fs.createWriteStream('output.txt');
writeStream.write(writedata,'UTF8');
writeStream.end();
writeStream.on('finish',function(){
    console.log("写入完成");
});
writeStream.on('error',function(err){
    console.log(err.stack)
});
console.log("执行写入流结束");
////实现导管读写操作
var newreader=fs.createReadStream('input.txt');
var newwrite=fs.createWriteStream('pipe.txt');
newreader.pipe(newwrite);
console.log("一个文件导入到另一文件执行结束");
////链式流压缩文件
var zlib=require('zlib');
fs.createReadStream('input.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('input.txt.gz'));
console.log("压缩文件完成");
////链式流解压文件(压缩和解压不能同时进行)
//fs.createReadStream('input.txt.gz')
//  .pipe(zlib.createGunzip())
//  .pipe(fs.createWriteStream('input.txt'));
//console.log("解压文件完成");


