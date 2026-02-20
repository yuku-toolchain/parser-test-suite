let iterator = (function* () {})();
let {value, done} = iterator.next();
iterator = iterator.flatMap(x => [x]);
({value, done} = iterator.next());