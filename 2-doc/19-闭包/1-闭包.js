

for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}
for (var i = 0; i < 5; i++) {
  (function x(n) {
    setTimeout(() => {
      return console.log(n);
    }, n * 1000);
  })(i)
}