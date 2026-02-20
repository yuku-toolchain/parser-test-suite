var root = Object.defineProperty({}, 'target', {
  set: function () {}
});
var desc = {
  get: function () {}
};
var subject = Object.create(root, {
  target: desc
});