var namedSym = Symbol('test262');
var anonSym = Symbol();
var getter;
class A {
  get id() {}
  get [anonSym]() {}
  get [namedSym]() {}
  static get id() {}
  static get [anonSym]() {}
  static get [namedSym]() {}
}
getter = Object.getOwnPropertyDescriptor(A.prototype, 'id').get;
getter = Object.getOwnPropertyDescriptor(A.prototype, anonSym).get;
getter = Object.getOwnPropertyDescriptor(A.prototype, namedSym).get;
getter = Object.getOwnPropertyDescriptor(A, 'id').get;
getter = Object.getOwnPropertyDescriptor(A, anonSym).get;
getter = Object.getOwnPropertyDescriptor(A, namedSym).get;