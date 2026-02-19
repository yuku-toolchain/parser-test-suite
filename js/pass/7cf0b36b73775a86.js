let iterator = (function* () {})();
let {value, done} = iterator.next();
iterator.reduce(() => {}, 0);