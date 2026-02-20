var args;
var count = 0;
var o1 = {};
Object.defineProperty(o1, 'p', {
  set: function (a) {
    count++;
    args = arguments;
    return false;
  }
});
var result = Reflect.set(o1, 'p', 42);