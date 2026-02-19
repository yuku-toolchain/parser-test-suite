let iterator = (function* () {})();
let {value, done} = iterator.next();
let result = iterator.find(() => true);
result = iterator.find(() => false);