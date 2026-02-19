var barValue;
var plainObject = {
  get foo() {},
  set bar(value) {
    barValue = value;
  }
};
var plainObjectTarget = new Proxy(plainObject, {});
var plainObjectProxy = new Proxy(plainObjectTarget, {});
plainObjectProxy.bar = 1;
var regExp = /(?:)/g;
var regExpTarget = new Proxy(regExp, {});
var regExpProxy = new Proxy(regExpTarget, {});
regExpProxy.lastIndex = 1;