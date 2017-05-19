var util=require('util');

function Base(){
    this.name="base";
    this.base=1991;
    this.sayHello=function(){
        console.log("hello "+this.name);
    }
}

Base.prototype.showName=function(){
    console.log(this.name);
}

function Sub(){
    this.name="sub";
}

util.inherits(Sub,Base);

var objBase=new Base();
objBase.sayHello();
objBase.showName();
console.log(objBase);

var objSub=new Sub();
objSub.showName();
console.log(objSub);
//将任意对象转换 为字符串的方法
console.log(util.inspect(objBase));
console.log(util.inspect(objBase,true));
//isArray如果是数组就返回true
util.isArray([])
//isRegExp如果是正则表达式返回ture
util.isRegExp(/some/);
//isDate如果是日期返回true
util.isDate(new Date());
//isError如果是一个错误对象返回true
util.isError(new Error());