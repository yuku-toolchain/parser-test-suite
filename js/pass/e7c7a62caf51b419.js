var callCount = 0;
var f;
f = ([cls = class {}, xCls = class X {}, xCls2 = class {
  static name() {}
}]) => {
  callCount = callCount + 1;
};
f([]);