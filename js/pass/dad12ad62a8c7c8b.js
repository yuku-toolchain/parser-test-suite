var o1 = {};
var receiver = {
  y: 42
};
Object.defineProperty(o1, 'x', {
  get: function () {
    return this.y;
  }
});
var o2 = Object.create(o1);