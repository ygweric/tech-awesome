const compiler = require('vue-template-compiler');
const template = '<p>{{message}}</p>'

console.log(compiler.compile(template))