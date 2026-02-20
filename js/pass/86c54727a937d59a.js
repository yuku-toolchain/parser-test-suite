class Base {
  constructor(...a) {
    this.base = a;
    var args = [];
    for (var i = 0; i < arguments.length; ++i) {
      args.push(arguments[i]);
    }
  }
}
class Child extends Base {
  constructor(...b) {
    super(1, 2, 3);
    this.child = b;
    var args = [];
    for (var i = 0; i < arguments.length; ++i) {
      args.push(arguments[i]);
    }
  }
}
var c = new Child(1, 2, 3);