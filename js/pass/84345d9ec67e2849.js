var baseCtorCalled = 0;
var fieldInitCalled = 0;
class Base {
  constructor() {
    ++baseCtorCalled;
  }
}
var C = class extends Base {
  field = ++fieldInitCalled;
  constructor() {
    super();
  }
};
new C();