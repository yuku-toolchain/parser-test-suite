var stringTarget = new Proxy(new String("str"), {});
var stringProxy = new Proxy(stringTarget, {
  deleteProperty: null
});
var regExpTarget = new Proxy(/(?:)/g, {});
var regExpProxy = new Proxy(regExpTarget, {
  deleteProperty: null
});