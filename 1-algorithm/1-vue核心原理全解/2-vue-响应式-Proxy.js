
/**
 * https://segmentfault.com/a/1190000038375749
 * vue核心原理全解
 * 自定义响应式函数 Proxy
 * 监听函数
 */

/**
 * 优势
 *  Proxy 可以直接监听对象而非属性，可以监听新增/删除属性；
 *  Proxy 可以直接监听数组的变化；
 *  Proxy 有多达 13 种拦截方法,不限于 apply、ownKeys、deleteProperty、has 等等是 Object.defineProperty 不具备的；
 *  Proxy 返回的是一个新对象,我们可以只操作新的对象达到目的,而 Object.defineProperty 只能遍历对象属性直接修改；
 * 不足
 *  兼容性问题，而且无法使用 polyfill 抹平（es5 中没有可以模拟Proxy的函数/方法）
 */


function updateView() {
  console.log('视图更新')
}

function reactive(target = {}) {
  if (typeof target !== 'object' || target === null) {
    // 非对象或数组，返回
    return target
  }

  // 代理配置
  const proxyConf = {
    get(target, key, receiver) {
      // 指处理本身（非原型的）属性
      const ownKeys = Reflect.ownKeys(target)
      if (ownKeys.includes(key)) {
        // 监听
      }
      console.log(`proxyConf get: ${key}`);
      const result = Reflect.get(target, key, receiver)
      // 在进行get的时候，再递归深度监听 - 性能提升
      return reactive(result)
    },
    set(target, key, value, receiver) {
      // 重复数据, 不处理
      if (value === target[key]) {
        return true
      }
      // 指处理本身（非原型的）属性
      const ownKeys = Reflect.ownKeys(target)
      if (ownKeys.includes(key)) {
        console.log('已有的key', key)
      } else {
        console.log('新增的key', key)
      }

      const result = Reflect.set(target, key, value, receiver)
      updateView()
      return result
    },
    deleteProperty(target, key) {
      const result = Reflect.deleteProperty(target, key)
      return result
    }
  }

  // 生成代理对象
  const observed = new Proxy(target, proxyConf)
  return observed
}

const data = {
  name: 'jack',
  age: 18,
  info: {
    address: '北京'
  },
  nums: [1, 2, 3]
}

const proxyData = reactive(data)


proxyData.info.address = '上海' // 深度监听
proxyData.nums.push(4) // 监听数组
