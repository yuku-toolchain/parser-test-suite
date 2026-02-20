var args;
var count = 0;
var _this;
var proto = {};
Object.defineProperty(proto, 'p', {
  set: function () {
    _this = this;
    args = arguments;
    count++;
  }
});
var target = Object.create(proto);
var result = Reflect.set(target, 'p', 42);