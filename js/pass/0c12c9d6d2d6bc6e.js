let iterator = (function* () {
  for (let i = 0; i < 5; ++i) {
    yield i;
  }
})();
let taken = iterator.take(2);
iterator.return();
let {value, done} = taken.next();