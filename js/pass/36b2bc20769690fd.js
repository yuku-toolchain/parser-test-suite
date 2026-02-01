var namedSym = Symbol('test262');
var anonSym = Symbol();
var o, setter;
o = {
  set id(_) {},
  set [anonSym](_) {},
  set [namedSym](_) {}
};
setter = Object.getOwnPropertyDescriptor(o, 'id').set;
setter = Object.getOwnPropertyDescriptor(o, anonSym).set;
setter = Object.getOwnPropertyDescriptor(o, namedSym).set;