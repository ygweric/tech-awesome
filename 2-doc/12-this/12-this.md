参考 
[快速理解JavaScript中this的用法与陷阱](https://segmentfault.com/a/1190000004580525)
[javascript关于this的用法](https://segmentfault.com/a/1190000040193339)


如果你写过 Java ，你可能接触过this——一般指向当前对象，实际上，这时候this的含义已经确定了，因为Java属于编译期绑定，而JS属于运行期绑定，所以导致this的含义在运行过程中可能有多种变化。
进一步说，this和它声明环境无关，而完全取决于他的执行环境。务必牢记这句话。

进一步说，**this和它声明环境无关，而完全取决于他的执行环境**。务必牢记这句话。

# 全局this
**node.js**
* `this` 是 `{}`
* `var` 变量不挂载
**浏览器**
* `this` 是 `window`
* `var` 变量挂载在`window`

# 1、三句话总结this用法：
1.  全局作用域：全局作用域中的 this 指向window。
2.  函数作用域：方法中的 this 指向调用它的对象；如果没有调用者就指向window。
3.  构造函数里：构造函数（或者ES6+的类）中的 this 指向新生成的实例对象。
4. `setTimeout` 和 `setInterval` 包裹的this指向`window`