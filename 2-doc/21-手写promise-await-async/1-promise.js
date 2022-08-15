function MyPromise(handleFn) {
  this.thenFn = null
  this.catchFn = null

  this.then = (thenFn) => {
    this.thenFn = thenFn
    return this
  }
  this.catch = (catchFn) => {
    this.catchFn = catchFn
    return this
  }

  const resolveFn = (res) => {
    this.thenFn && this.thenFn(res)
  }
  const rejectFn = (err) => {
    this.catchFn && this.catchFn(err)
  }

  handleFn(resolveFn, rejectFn)
}

console.log('begin');
new MyPromise((resolve, reject) => {
  console.log('run promise body');
  setTimeout(() => {
    resolve('success')
    // reject('fail')
  }, 1000);
}).then(res => {
  console.log(res);
}).catch(err => {
  console.error(err);
})



