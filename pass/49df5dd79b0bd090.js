var root = Object.defineProperty({}, 'target', {
  set: function () {}
});
var desc = {
  set: function () {}
};
var subject = Object.create(root, {
  target: desc
});