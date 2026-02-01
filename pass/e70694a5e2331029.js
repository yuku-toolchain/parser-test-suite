class Class {
  method() {}
  get accessor() {}
  set accessor(x) {}
}
var instance = new Class();
var accessor = Object.getOwnPropertyDescriptor(Class.prototype, "accessor");