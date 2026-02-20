var keys = ["1.0", "+1", "1000000000000000000000", "0.0000001"];
var fnset = function () {};
var fnget = function () {};
var acDesc = {
  get: fnget,
  set: fnset,
  enumerable: true,
  configurable: false
};
testWithBigIntTypedArrayConstructors(function (TA) {
  keys.forEach(function (key) {
    var dataDesc = {
      value: 42n,
      writable: true,
      configurable: true
    };
    var sample1 = new TA();
    var sample2 = new TA();
    var desc = Object.getOwnPropertyDescriptor(sample2, key);
    var sample3 = new TA();
    Object.preventExtensions(sample3);
    var sample4 = new TA();
    Object.preventExtensions(sample4);
  });
});