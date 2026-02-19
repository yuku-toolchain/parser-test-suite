let iterator = (function* () {
  for (let i = 0; i < 5; ++i) {
    yield i;
  }
})();
let mapped = iterator.map(() => 0);
iterator.return();
let {value, done} = mapped.next();