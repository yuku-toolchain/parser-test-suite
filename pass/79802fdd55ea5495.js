function callbackfn(val, idx, obj) {
  return new EvalError();
}
var newArr = [11].filter(callbackfn);