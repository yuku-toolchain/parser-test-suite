let iterator = (function* () {})();
let {value, done} = iterator.next();
iterator = iterator.map(() => 0);
({value, done} = iterator.next());