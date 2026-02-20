let iterator = (function* () {})();
let {value, done} = iterator.next();
let result = iterator.some(() => true);
result = iterator.some(() => false);