var o1 = {
  p: 42
};
var receiver = 'receiver is a string';
var result = Reflect.set(o1, 'p', 43, receiver);