var calls = 0;
var Base = (function () {}).bind();
Object.defineProperty(Base, 'prototype', {
  get: function () {
    calls++;
    return null;
  },
  configurable: true
});
class C extends Base {}
calls = 0;
Object.defineProperty(Base, 'prototype', {
  get: function () {
    calls++;
    return 42;
  },
  configurable: true
});