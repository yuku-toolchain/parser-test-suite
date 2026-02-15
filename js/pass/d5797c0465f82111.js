var C = class {
  set m(x = 42) {}
};
var set = Object.getOwnPropertyDescriptor(C.prototype, 'm').set;