var namedSym = Symbol('test262');
var anonSym = Symbol();
var o;
o = {
  id() {},
  [anonSym]() {},
  [namedSym]() {}
};