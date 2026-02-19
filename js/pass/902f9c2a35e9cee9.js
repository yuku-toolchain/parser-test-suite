class Base1 {}
class Subclass1 extends Base1 {}
var s1 = new Subclass1();
class Base2 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
class Subclass2 extends Base2 {}
var s2 = new Subclass2(1, 2);
var f = Subclass2.bind({}, 3, 4);
var s2prime = new f();
var obj = {};
class Base3 {
  constructor() {
    return obj;
  }
}
class Subclass3 extends Base3 {}
var s3 = new Subclass3();