var probeCtorThis;
var thisDuringField;
var thisFromProbe;
var thisDuringCtor;
class Base {
  constructor() {}
}
var C = class extends Base {
  field = (thisDuringField = this, thisFromProbe = probeCtorThis());
  constructor() {
    probeCtorThis = () => this;
    super();
    thisDuringCtor = this;
  }
};
var instance = new C();