//引入events模块
var events=require('events');
//创建eventEmitter对象
var eventEmitter=new events.EventEmitter();
//绑定事件及事件的处理程序
//eventEmitter.on('eventName', eventHandler);
//触发事件
//eventEmitter.emit('eventName');

//创建事件处理程序
var connectHandler=function connected(){
    console.log('连接成功');
    //触发data_received事件
    eventEmitter.emit('data_received');
}
//绑定connection事件处理应用程序
eventEmitter.on('connection',connectHandler);
eventEmitter.on('data_received',function(){
    console.log('数据接收成功。');
})
eventEmitter.emit('connection');
console.log('程序执行完毕');
//eventEmitter.emi执行带参数的函数
eventEmitter.on('someEvent',function(arg1,arg2){
    console.log('listener',arg1,arg2);
})
eventEmitter.emit('someEvent','arg参数1','arg参数2');

var listener1=function listener1(){
    console.log('监听器listener1执行');
}
var listener2=function listener2(){
    console.log('监听器listener2执行');
}
eventEmitter.addListener('newConnection',listener1);
eventEmitter.on('newConnection',listener2);

var eventListeners=require('events').EventEmitter.listenerCount(eventEmitter,'newConnection');
console.log(eventListeners+"个监听器监听事件");

eventEmitter.emit('newConnection');

eventEmitter.removeListener('newConnection',listener1);

eventEmitter.emit('newConnection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'newConnection');
console.log(eventListeners + " 个监听器监听连接事件。");

console.log("程序执行完毕。");
eventEmitter.emit('error'); 