const obj1 = {};
const obj2 = {};
const obj3 = {};
const obj4 = {};
const map = new WeakMap();
map.set(obj1, 0);
let callbackCalls = 0;
function callback() {
  callbackCalls += 1;
  throw new Error('Callbackfn should not be evaluated if key is present');
}
map.set(obj2, 1);
map.set(obj3, 2);