function assertSetterDescriptor(object, name) {
  var descr = Object.getOwnPropertyDescriptor(object, name);
}
var x, staticX, y, staticY;
class C {
  set x(v) {
    x = v;
  }
  static set staticX(v) {
    staticX = v;
  }
  set y(v) {
    y = v;
  }
  static set staticY(v) {
    staticY = v;
  }
}
assertSetterDescriptor(C.prototype, 'x');
assertSetterDescriptor(C.prototype, 'y');
assertSetterDescriptor(C, 'staticX');
assertSetterDescriptor(C, 'staticY');