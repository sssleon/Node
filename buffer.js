//创建10个字符的buffer
var buf1=new Buffer(10);
//创建数组buffer
var buf2=new Buffer([10,20,30,40]);
//创建字符串buffer
var buf3=new Buffer("www.baidu.com","utf-8");
//写入缓冲区
buf4=new Buffer(256);
len=buf4.write("www.baidu.com");
console.log("写入字符数："+len);
//从缓冲区读取数据 编码方式：ascii/utf8/utf16le/ucs2/base64/hex
buf5=new Buffer(256);
for(var i=0;i<26;i++){
    buf5[i]=i+97;
}
console.log(buf5.toString('ascii'));
console.log(buf5.toString('ascii',0,5));
console.log(buf5.toString('utf8',0,5));
console.log(buf5.toString(undefined,0,5));
//buffer转换json对象
var buf6=new Buffer("www.baidu.com");
var json=buf6.toJSON(buf6);
console.log(json);
//合并缓冲区
var buf7=new Buffer("百度网站");
var buf8=new Buffer("www.baidu.com");
var buf9=Buffer.concat([buf7,buf8]);
console.log("合并内容为："+buf9);
//缓冲区比较
var buf10=new Buffer('ABC');
var buf11=new Buffer('ABCD');
var compresult=buf10.compare(buf11);
if(compresult<0){
    console.log("比较结果为：buf10<buf11");
}else if(compresult){
    console.log("比较结果为：buf10=buf11");
}else{
    console.log("比较结果为：buf10>buf11");
}
//copy缓冲区
var buf12=new Buffer("ABC");
var buf13=new Buffer(3);
buf12.copy(buf13);
console.log("copy结果："+buf13);
//缓冲区剪裁
var buf14=new Buffer("runoob");
var buf15=buf14.slice(0,2);
console.log("剪裁结果buf14："+buf14+";buf15:"+buf15);
//缓冲区长度
var buf16=new Buffer("www.baidu.com");
console.log("buffer length：",buf16.length);
