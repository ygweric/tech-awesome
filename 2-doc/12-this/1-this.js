
/**
 
快速理解JavaScript中this的用法与陷阱
https://segmentfault.com/a/1190000004580525

 */

var name = '罗恩';
var aaa = {
  name: '哈利',
  say: function () {
    console.log(this.name);
  }
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
var bbb = {
  name: '赫敏',
  say: aaa.say
}
/* 生命的bbb等价于下面 */
var bbb = {
  name: '赫敏',
  say: function () {
    console.log(this.name);
  }
}
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

var ccc = aaa.say;

aaa.say();    //哈利
bbb.say();    //赫敏
ccc();        //罗恩 在nodejs是undefined， 在浏览器是 罗恩

console.log(this.name);
console.log(this);