var namedSym = Symbol('test262');
var anonSym = Symbol();
class A {
  *id() {}
  *[anonSym]() {}
  *[namedSym]() {}
  static *id() {}
  static *[anonSym]() {}
  static *[namedSym]() {}
}