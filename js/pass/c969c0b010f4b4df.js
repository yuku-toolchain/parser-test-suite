var value1 = 1;
var target1 = Object.preventExtensions({
  set foo(val) {
    value1 = val;
  }
});
Object.assign(target1, {
  foo: 2
});
var sym = Symbol();
var value2 = 1;
var target2 = {
  set [sym](val) {
    value2 = val;
  }
};
Object.preventExtensions(target2);
Object.assign(target2, {
  [sym]: 2
});