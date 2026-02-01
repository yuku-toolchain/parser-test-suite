var superProp = null;
var o = {
  test262: null,
  method() {
    superProp = eval('super.test262;');
  }
};
o.method();
Object.setPrototypeOf(o, {
  test262: 262
});
o.method();