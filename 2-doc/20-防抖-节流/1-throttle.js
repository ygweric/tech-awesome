

function logName() {
  console.log(Date.now() + ' name');
}
function logAge() {
  console.log(Date.now() + ' age');
}


let throttleLastFireTimes = []
function throttle(delay = 500, func) {
  return (function (index) {
    return function () {
      let now = Date.now()
      if (!throttleLastFireTimes[index] || (now - throttleLastFireTimes[index] > delay)) {
        throttleLastFireTimes[index] = now
        func && func()
      }
    }
  })(throttleLastFireTimes.length)
}



let logNameThrottle = throttle(500, logName)
logNameThrottle()
setTimeout(() => { logNameThrottle() }, 200);
setTimeout(() => { logNameThrottle() }, 600);

let logAgeThrottle = throttle(500, logAge)
logAgeThrottle()
setTimeout(() => { logAgeThrottle() }, 200);
setTimeout(() => { logAgeThrottle() }, 600);


