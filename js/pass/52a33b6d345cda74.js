var other = $262.createRealm().global;
var numberCount = 0;
var stringCount = 0;
var booleanCount = 0;
var symbolCount = 0;
var spy;
spy = new Proxy({}, {
  set: function () {
    numberCount += 1;
    return true;
  }
});
Object.setPrototypeOf(other.Number.prototype, spy);
other.eval('0..test262 = null;');
spy = new Proxy({}, {
  set: function () {
    stringCount += 1;
    return true;
  }
});
Object.setPrototypeOf(other.String.prototype, spy);
other.eval('"".test262 = null;');
spy = new Proxy({}, {
  set: function () {
    booleanCount += 1;
    return true;
  }
});
Object.setPrototypeOf(other.Boolean.prototype, spy);
other.eval('true.test262 = null;');
spy = new Proxy({}, {
  set: function () {
    symbolCount += 1;
    return true;
  }
});
Object.setPrototypeOf(other.Symbol.prototype, spy);
other.eval('Symbol().test262 = null;');