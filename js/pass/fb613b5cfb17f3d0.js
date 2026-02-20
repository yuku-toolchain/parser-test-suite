let iterator = (function* () {
  for (let i = 0; i < 5; ++i) {
    yield i;
  }
})();
iterator.return();
let mapped = iterator.flatMap(() => []);
let {value, done} = mapped.next();