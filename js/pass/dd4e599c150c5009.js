let iterator = (function* () {
  for (let i = 0; i < 5; ++i) {
    yield i;
  }
})();
let filtered = iterator.filter(() => true);
let {value, done} = iterator.next();
iterator.next();
iterator.next();
({value, done} = filtered.next());
({value, done} = filtered.next());
({value, done} = filtered.next());