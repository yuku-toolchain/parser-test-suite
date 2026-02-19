var target = {
  attr: 1
};
var p = new Proxy(target, {});
var proxyDesc = Object.getOwnPropertyDescriptor(p, "attr");