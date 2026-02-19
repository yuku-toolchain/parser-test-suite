var map = new Map([[1, 0]]);
var callbackCalls = 0;
function callback() {
  callbackCalls += 1;
  throw new Error('Callbackfn should not be evaluated if key is present');
}
map.set(2, 1);
map.set(3, 2);