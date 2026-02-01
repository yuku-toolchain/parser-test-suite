var namedSym = Symbol('test262');
var anonSym = Symbol();
var o;
o = {
  xId: function x() {},
  id: function () {},
  [anonSym]: function () {},
  [namedSym]: function () {}
};