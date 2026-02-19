var root = Object.defineProperty({}, 'target', {
  get: function () {}
});
var desc = {
  value: null
};
var subject = Object.create(root, {
  target: desc
});