var root = Object.defineProperty({}, 'target', {
  set: function () {}
});
var desc = {
  value: null
};
var subject = Object.create(root, {
  target: desc
});