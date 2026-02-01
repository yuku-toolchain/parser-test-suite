var baseCalled = 0;
class Base {
  constructor() {
    baseCalled++;
  }
}
var fCalled = 0;
function f() {
  fCalled++;
  return 3;
}
class Subclass1 extends Base {
  constructor() {
    baseCalled = 0;
    super();
    var obj = this;
    var exn = null;
    baseCalled = 0;
    fCalled = 0;
    try {
      super(f());
    } catch (e) {
      exn = e;
    }
    exn = null;
    baseCalled = 0;
    fCalled = 0;
    try {
      super(super(), f());
    } catch (e) {
      exn = e;
    }
    exn = null;
    baseCalled = 0;
    fCalled = 0;
    try {
      super(f(), super());
    } catch (e) {
      exn = e;
    }
  }
}
new Subclass1();