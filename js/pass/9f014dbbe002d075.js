var o1 = {
  p: 43
};
var result = Reflect.set(o1, 'p', 42);
var o2 = {
  p: 43
};
var receiver = {
  p: 44
};
var result = Reflect.set(o2, 'p', 42, receiver);