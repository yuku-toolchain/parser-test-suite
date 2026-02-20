var root = Object.defineProperty({}, 'target', {
  set: function () {}
});
var desc = {
  get: function () {}
};
var intermediary = Object.create(root, {
  target: desc
});
var subject = Object.create(intermediary);