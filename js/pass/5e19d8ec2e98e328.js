var root = Object.defineProperty({}, 'target', {
  get: function () {}
});
var desc = {
  get: function () {}
};
var subject = Object.create(root, {
  target: desc
});