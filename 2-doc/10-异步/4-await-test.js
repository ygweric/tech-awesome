const object = {
  getPastEvents: () => Promise.resolve([1, 2, 3])
}

function* fetchPastEvents() {
  console.log("entry")
  const values = yield object.getPastEvents()
  console.log('yield value: ', values)
}

const iterator = fetchPastEvents()
console.log(iterator.next().value);
// const promise = iterator.next().value;
// promise.then(val => iterator.next(val))