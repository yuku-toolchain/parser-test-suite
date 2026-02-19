var target = {
  number: 1,
  symbol: Symbol(),
  string: '',
  boolean: true
};
var p = new Proxy(target, {
  getOwnPropertyDescriptor: function (t, prop) {
    return t[prop];
  }
});