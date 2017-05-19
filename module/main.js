var hello=require('./hello');
hello.world();
var sayhi=require('./sayhi')
var hi=new sayhi();
hi.setName("BadBoby");
hi.sayHello();