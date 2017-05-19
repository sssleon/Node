//表示当前正在执行的脚本的文件名及位置
console.log(__filename);
//表示当前执行脚本所在的目录
console.log(__dirname);
//全局函数在指定的毫秒(ms)数后执行指定函数(cb)
function sayHello(){
    console.log("Hello");
}
var t=setTimeout(sayHello,2000);
//全局函数用于停止一个之前通过 setTimeout() 创建的定时器
clearTimeout(t);

//setInterval(cb, ms) 全局函数在指定的毫秒(ms)数后执行指定函数(cb)。
function sayWord(){
    console.log('world');
}
var s=setInterval(sayWord,2000)
clearInterval(s);

//console
console.info("程序开始执行");
var counter=10;
console.log("计数：%d",counter);
console.time("计时开始，计算开始与结束之间的时间");
//一些需要执行的代码
console.timeEnd('计时开始，计算开始与结束之间的时间');
console.info("程序执行完毕");
