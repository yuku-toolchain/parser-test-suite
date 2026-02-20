var target = {
  attr: 1
};
var p = new Proxy(target, {});
p.attr = 2;