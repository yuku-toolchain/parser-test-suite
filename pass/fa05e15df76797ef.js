var args, that;
class Base {
  constructor() {
    that = this;
    args = arguments;
  }
}
class Derived extends Base {}
new Derived();
new Derived(0, 1, 2);
var arr = new Array(100);
var obj = {};