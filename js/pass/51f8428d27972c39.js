var callCount = 0;
function* f({cls = class {}, xCls = class X {}, xCls2 = class {
  static name() {}
}} = {}) {
  callCount = callCount + 1;
}
f().next();