var args;
var count = 0;
var o1 = {};
var receiver = {};
var _receiver;
Object.defineProperty(o1, 'p', {
  set: function (a) {
    count++;
    args = arguments;
    _receiver = this;
    return false;
  }
});
var result = Reflect.set(o1, 'p', 42, receiver);