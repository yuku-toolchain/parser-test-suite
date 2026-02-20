var ctor;
var C = class {
  constructor() {
    ctor = this.foo;
  }
  foo = 42;
};
var c = new C();