var o = {};
function fn() {
  return o;
}
var result = Reflect.apply(fn, 1, []);