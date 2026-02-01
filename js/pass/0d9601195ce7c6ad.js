let iterator = (function* () {
  for (let i = 0; i < 5; ++i) {
    yield i;
  }
})();
let dropped = iterator.drop(2);
let {value, done} = iterator.next();
({value, done} = dropped.next());
({value, done} = dropped.next());
({value, done} = dropped.next());