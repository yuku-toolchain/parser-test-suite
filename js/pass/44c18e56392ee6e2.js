var regexp = /./;
function callMatchAll() {
  regexp[Symbol.matchAll]('');
}
regexp.constructor = null;
regexp.constructor = true;
regexp.constructor = "";
regexp.constructor = Symbol();
regexp.constructor = 1;