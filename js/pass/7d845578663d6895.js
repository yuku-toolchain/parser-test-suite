function callbackfn(val, idx, obj) {
  return new Number();
}
var newArr = [11].filter(callbackfn);