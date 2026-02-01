var o = {};
o.p1 = 'value 1';
Object.defineProperty(o, 'p2', {
  get: undefined
});
Object.defineProperty(o, 'p3', {
  get: function () {
    return 'foo';
  }
});
var o2 = Object.create({
  p: 42
});