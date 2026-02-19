function assertMethodDescriptor(object, name) {
  var desc = Object.getOwnPropertyDescriptor(object, name);
}
class C {
  method() {
    return 1;
  }
  static staticMethod() {
    return 2;
  }
  method2() {
    return 3;
  }
  static staticMethod2() {
    return 4;
  }
}
assertMethodDescriptor(C.prototype, 'method');
assertMethodDescriptor(C.prototype, 'method2');
assertMethodDescriptor(C, 'staticMethod');
assertMethodDescriptor(C, 'staticMethod2');