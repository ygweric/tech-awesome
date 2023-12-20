function getLogResultFn(fn) {
  return function () {
    console.log(fn(...arguments));
  };
}

module.exports = getLogResultFn;
