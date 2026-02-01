function assertMethodDescriptor(object, name) {
  var desc = Object.getOwnPropertyDescriptor(object, name);
}
function assertGetterDescriptor(object, name) {
  var desc = Object.getOwnPropertyDescriptor(object, name);
}
function assertSetterDescriptor(object, name) {
  var desc = Object.getOwnPropertyDescriptor(object, name);
}
class B {
  1() {
    return 1;
  }
  get 2() {
    return 2;
  }
  set 3(_) {}
  static 4() {
    return 4;
  }
  static get 5() {
    return 5;
  }
  static set 6(_) {}
}
assertMethodDescriptor(B.prototype, '1');
assertGetterDescriptor(B.prototype, '2');
assertSetterDescriptor(B.prototype, '3');
assertMethodDescriptor(B, '4');
assertGetterDescriptor(B, '5');
assertSetterDescriptor(B, '6');
class C extends B {
  1() {
    return super[1]();
  }
  get 2() {
    return super[2];
  }
  static 4() {
    return super[4]();
  }
  static get 5() {
    return super[5];
  }
}