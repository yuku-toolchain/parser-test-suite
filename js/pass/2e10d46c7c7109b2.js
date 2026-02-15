var a1 = [];
Object.freeze(a1);
a1.fill(1);
var a2 = {
  length: 1
};
Object.defineProperty(a2, '0', {
  set: function () {}
});