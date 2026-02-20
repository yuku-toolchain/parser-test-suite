var value = {};
Promise.resolve(value).finally(function () {}).then(() => $DONE(), $DONE);
var calls = 0;
var expected = [{
  length: 0,
  name: ''
}, {
  length: 1,
  name: ''
}];
var then = Promise.prototype.then;
Promise.prototype.then = function (resolve) {
  if (calls === 0) {}
  calls += 1;
  return then.call(this, resolve);
};