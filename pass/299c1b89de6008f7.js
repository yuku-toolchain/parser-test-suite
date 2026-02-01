var target = {
  get attr() {
    return this;
  }
};
var p = new Proxy(target, {
  get: null
});
var pParent = Object.create(new Proxy(target, {}));