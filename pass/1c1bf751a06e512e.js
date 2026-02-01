var namedSym = Symbol('test262');
var anonSym = Symbol();
var o;
o = {
  xId: class x {},
  id: class {},
  [anonSym]: class {},
  [namedSym]: class {}
};