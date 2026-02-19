let iterator = (function* () {})();
let {value, done} = iterator.next();
let result = iterator.forEach(() => {
  throw new Error();
});