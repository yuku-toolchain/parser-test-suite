var root = Object.defineProperty({}, 'target', {
  get: function () {}
});
var desc = {
  value: null
};
var intermediary = Object.create(root, {
  target: desc
});
var subject = Object.create(intermediary);