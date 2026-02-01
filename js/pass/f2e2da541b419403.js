class MyError extends Error {}
var myError = new MyError();
Promise.reject(myError).finally(function () {}).then(function (value) {}, function (reason) {
  if (reason === myError) {} else {}
});
var calls = 0;
var expected = [{
  length: 0,
  name: ''
}, {
  length: 1,
  name: ''
}];
var then = Promise.prototype.then;
Promise.prototype.then = function (resolve, reject) {
  if (calls === 0) {} else {}
  calls += 1;
  return then.call(this, resolve, reject);
};