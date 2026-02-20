var o = {};
var count = 0;
var results, args;
function fn() {
  count++;
  results = {
    thisArg: this,
    args: arguments
  };
}
Reflect.apply(fn, o, ['arg1', 2, null]);