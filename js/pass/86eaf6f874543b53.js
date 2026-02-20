var callCount = 0;
var obj = {
  method({cls = class {}, xCls = class X {}, xCls2 = class {
    static name() {}
  }}) {
    callCount = callCount + 1;
  }
};
obj.method({});