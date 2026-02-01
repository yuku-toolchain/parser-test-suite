var namedSym = Symbol('test262');
var anonSym = Symbol();
var o;
o = {
  xId: (0, function () {}),
  id: function () {},
  [anonSym]: function () {},
  [namedSym]: function () {}
};