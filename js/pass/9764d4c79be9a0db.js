var receiver = {};
var fn = function () {};
Object.defineProperty(receiver, 'p', {
  set: fn
});
var o1 = {};
var result = Reflect.set(o1, 'p', 42, receiver);
var o2 = {
  p: 43
};
result = Reflect.set(o2, 'p', 42, receiver);