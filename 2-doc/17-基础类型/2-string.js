

/*
## String
* `var str = 'hello world'`　　定义了一个 str 变量，同时给变量 str 赋值 'hello world' 字符串，此时 str 的值为字符串 'hello world'，类型为基本类型。
* `var str1 = String('hello world')`　　这是字符串声明的形式创建了字符串，此时 str1 的值也为字符串 'hello world'，类型为基本类型。
* `var str2 = new String('hello world')`　　此时的String为一个构造函数，而 new 操作符创建了一个字符串对象
*/
console.log("typeof String('abc'): ", typeof String('abc'));
console.log("typeof new String('abc'): ", typeof new String('abc'));
console.log("String('abc') === 'abc': ", String('abc') === 'abc');
console.log("new String('abc') === 'abc': ", new String('abc') === 'abc');
console.log("String('abc') === new String('abc'): ", String('abc') === new String('abc'));
console.log("String('abc') == new String('abc'): ", String('abc') == new String('abc'));





