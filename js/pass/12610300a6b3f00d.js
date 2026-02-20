function Target() {}
var p = new Proxy(Target, {
  construct: {}
});