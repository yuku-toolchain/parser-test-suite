class Base {
  constructor(a, b) {
    var o = new Object();
    o.prp = a + b;
    return o;
  }
}
class Subclass extends Base {
  constructor(a, b) {
    var exn;
    try {
      this.prp1 = 3;
    } catch (e) {
      exn = e;
    }
    super(a, b);
    return this;
  }
}
var b = new Base(1, 2);
var s = new Subclass(2, -1);
class Subclass2 extends Base {
  constructor(x) {
    super(1, 2);
    if (x < 0) return;
    var called = false;
    function tmp() {
      called = true;
      return 3;
    }
    var exn = null;
    try {
      super(tmp(), 4);
    } catch (e) {
      exn = e;
    }
  }
}
var s2 = new Subclass2(1);
var s3 = new Subclass2(-1);
class BadSubclass extends Base {
  constructor() {}
}