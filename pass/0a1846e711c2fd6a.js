var F = function () {};
F.prototype.a = {};
F.prototype.b = {};
var f = new F();
var bValue = {};
f.b = bValue;
Object.defineProperty(f, 'c', {
  enumerable: false,
  configurable: true,
  writable: false,
  value: {}
});
var result = Object.getOwnPropertyDescriptors(f);