let iterator = (function* () {
  for (let i = 0; i < 5; ++i) {
    yield i;
  }
})();
iterator.return();
let taken = iterator.take(2);
let {value, done} = taken.next();