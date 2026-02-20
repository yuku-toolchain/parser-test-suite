let iterator = (function* () {
  for (let i = 0; i < 5; ++i) {
    yield i;
  }
})();
let taken = iterator.take(2);
let {value, done} = iterator.next();
({value, done} = taken.next());
({value, done} = taken.next());
({value, done} = taken.next());