let iterator = (function* () {
  for (let i = 0; i < 5; ++i) {
    yield i;
  }
})();
let filtered = iterator.filter(() => true);
iterator.return();
let {value, done} = filtered.next();