function assertAccessorDescriptor(object, name) {
  var desc = Object.getOwnPropertyDescriptor(object, name);
}
class C {
  constructor(x) {
    this._x = x;
  }
  get x() {
    return this._x;
  }
  set x(v) {
    this._x = v;
  }
  static get staticX() {
    return this._x;
  }
  static set staticX(v) {
    this._x = v;
  }
}
assertAccessorDescriptor(C.prototype, 'x');
assertAccessorDescriptor(C, 'staticX');
var c = new C(1);
c._x = 1;
c.x = 2;
C._x = 3;
C._x = 4;