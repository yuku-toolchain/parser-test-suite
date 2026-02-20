function assertGetterDescriptor(object, name) {
  var desc = Object.getOwnPropertyDescriptor(object, name);
}
class C {
  get x() {
    return 1;
  }
  static get staticX() {
    return 2;
  }
  get y() {
    return 3;
  }
  static get staticY() {
    return 4;
  }
}
assertGetterDescriptor(C.prototype, 'x');
assertGetterDescriptor(C.prototype, 'y');
assertGetterDescriptor(C, 'staticX');
assertGetterDescriptor(C, 'staticY');