var target = {
  attr: 1
};
var p = new Proxy(target, {
  set: undefined
});
p.attr = 2;