var promise = new Promise(function () {});
promise.constructor = undefined;
promise.constructor = null;
promise.constructor = true;
promise.constructor = 1;
promise.constructor = "";
var symbol = Symbol();
promise.constructor = symbol;