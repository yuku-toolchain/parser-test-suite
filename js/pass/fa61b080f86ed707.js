let iterator = (function* () {})();
let {value, done} = iterator.next();
const initialValue = {};
let result = iterator.reduce(() => {}, initialValue);