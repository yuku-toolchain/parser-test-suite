var o1 = {};
Object.defineProperty(o1, 'p1', {
  set: function () {}
});
var o2 = Object.create(o1);