var root = Object.defineProperty({}, 'target', {
  get: function () {}
});
var desc = {
  set: function () {}
};
var intermediary = Object.create(root, {
  target: desc
});
var subject = Object.create(intermediary);