var calls = 0;
class Base {
  constructor() {
    calls++;
  }
}
class Derived extends Base {}
var object = new Derived();
calls = 0;