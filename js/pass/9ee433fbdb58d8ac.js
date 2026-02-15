let iterator = (function* () {
  for (let i = 0; i < 5; ++i) {
    yield i;
  }
})();
let mapped = iterator.flatMap(x => [x]);
iterator.return();
let {value, done} = mapped.next();