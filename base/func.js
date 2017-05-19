function say(word){
    console.log(word);
}
function execute(somFunction,value){
    somFunction(value);
}
execute(say,"Hello");

execute(function(word){
    console.log(word);
},"Hello World");