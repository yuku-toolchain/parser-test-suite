var value1 = 1;
var target1 = {
  set foo(val) {
    value1 = val;
  }
};
Object.freeze(target1);
Object.assign(target1, {
  foo: 2
});
var sym = Symbol();
var value2 = 1;
var target2 = Object.freeze({
  set [sym](val) {
    value2 = val;
  }
});
Object.freeze(target2);
Object.assign(target2, {
  [sym]: 2
});