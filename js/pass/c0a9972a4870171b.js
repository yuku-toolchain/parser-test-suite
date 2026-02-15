var context;
var target = {
  set attr(val) {
    context = this;
  }
};
var p = new Proxy(target, {
  set: null
});
p.attr = 1;
var pParent = Object.create(new Proxy(target, {}));
pParent.attr = 3;