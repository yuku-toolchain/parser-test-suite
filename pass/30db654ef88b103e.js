let iterator = (function* () {})();
let {value, done} = iterator.next();
let result = iterator.every(() => true);
result = iterator.every(() => false);