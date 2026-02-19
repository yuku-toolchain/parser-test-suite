class Base {
  constructor(x) {
    this.foobar = x;
  }
}
class Subclass extends Base {
  constructor(x) {
    super(x);
  }
}
var s = new Subclass(1);
var s1 = new Subclass(1, 2);
var s2 = new Subclass();
class Subclass2 extends Subclass {
  constructor() {
    super(5, 6, 7);
  }
}
var ss2 = new Subclass2();
class Subclass3 extends Base {
  constructor(x, y) {
    super(x + y);
  }
}
var ss3 = new Subclass3(27, 42 - 27);