var xCls, cls, xCls2;
var counter = 0;
for ({xCls = class x {}, cls = class {}, xCls2 = class {
  static name() {}
}} of [{}]) {
  counter += 1;
}