
function defineReactive(target, key, value) {
  // 深度监听（对象）
  Observer(value)
  // 核心API - 响应
  Object.defineProperty(target, key, {
    get: function () {
      return value
    },
    set: function (newVal) {
      if (value !== newVal) {
        // 深度监听（对象）
        Observer(newVal)

        value = newVal
        updateView()
      }
    }
  })
}

function updateView() {
  console.log('视图更新')
}

// 重新定义数组原型
const oldArrayProperty = Array.prototype;
// 创建新对象，原型指向 oldArrayProperty，再拓展新方法不会影响新原型
const arrProto = Object.create(oldArrayProperty)
const methods = ['push', 'pop', 'shift', 'unshift', 'splice']
methods.forEach(methodName => {
  arrProto[methodName] = function () {
    updateView(); // 视图更新
    oldArrayProperty[methodName].call(this, ...arguments) // 调用数组原型方法进行更新
  }
});

function Observer(target) {
  if (typeof target !== 'object' || target === null) {
    return target
  }
  // 深度监听（数组）
  if (Array.isArray(target)) {
    target.__proto__ = arrProto
  }

  for (key in target) {
    defineReactive(target, key, target[key])
  }
}

const data = {
  name: 'jack',
  age: 18,
  info: {
    address: '北京'
  },
  nums: [1, 2, 3]
}

// data 实现了双向绑定，深度监听
Observer(data)

// data.info.address = '上海' // 深度监听
// data.nums.push(4) // 监听数组
