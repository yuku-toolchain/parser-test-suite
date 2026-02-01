let iterator = (function* () {
  for (let i = 0; i < 5; ++i) {
    yield i;
  }
})();
iterator.return();
let dropped = iterator.drop(2);
let {value, done} = dropped.next();