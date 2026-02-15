var viaCall;
var viaMember;
class Parent {
  getThis() {
    return this;
  }
  get This() {
    return this;
  }
}
class C extends Parent {
  method() {
    viaCall = super['getThis']();
    viaMember = super['This'];
  }
}
C.prototype.method();