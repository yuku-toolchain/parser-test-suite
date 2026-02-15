var sym = Symbol();
var target1 = {
  [sym]: 1
};
Object.freeze(target1);
var target2 = Object.freeze({
  foo: 1
});