var calls = 0;
class Base {
  constructor() {
    this.prop = 1;
    calls++;
  }
}
class Derived extends Base {
  constructor() {
    super();
    return undefined;
  }
}
var object = new Derived();