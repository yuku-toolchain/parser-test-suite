class C {
  func = () => {
    super.prop = 'test262';
  };
  static staticFunc = () => {
    super.staticProp = 'static test262';
  };
}
let c = new C();
c.func();
C.staticFunc();