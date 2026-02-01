var root = Object.defineProperty({}, 'target', {
  get: function () {}
});
var desc = {
  set: function () {}
};
var subject = Object.create(root, {
  target: desc
});