var namedSym = Symbol('test262');
var anonSym = Symbol();
var o, getter;
o = {
  get id() {},
  get [anonSym]() {},
  get [namedSym]() {}
};
getter = Object.getOwnPropertyDescriptor(o, 'id').get;
getter = Object.getOwnPropertyDescriptor(o, anonSym).get;
getter = Object.getOwnPropertyDescriptor(o, namedSym).get;