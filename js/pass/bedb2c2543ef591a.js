let iterator = (function* () {})();
let {value, done} = iterator.next();
iterator = iterator.filter(() => true);
({value, done} = iterator.next());