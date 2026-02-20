function Target() {}
var P = new Proxy(Target, {
  construct: function () {}
});