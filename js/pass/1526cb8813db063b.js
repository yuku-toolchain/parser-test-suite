let iterator = (function* () {
  for (let i = 0; i < 5; ++i) {
    yield i;
  }
})();
let mapped = iterator.flatMap(x => [x]);
let {value, done} = iterator.next();
iterator.next();
iterator.next();
({value, done} = mapped.next());
({value, done} = mapped.next());
({value, done} = mapped.next());