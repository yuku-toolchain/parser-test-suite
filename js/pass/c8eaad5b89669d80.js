class Base {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
var obj = {};
class Subclass extends Base {
  constructor(x, y) {
    super(x, y);
  }
}
var f = Subclass.bind(obj);
var s = new f(1, 2);
var s1 = new f(1);
var g = Subclass.bind(obj, 1);
var s2 = new g(8);