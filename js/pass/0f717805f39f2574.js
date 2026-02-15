var self, resolve;
var builtinResolve = Promise.resolve;
var thenable = {
  then: function (r) {
    resolve = r;
  }
};
try {
  Promise.resolve = function (v) {
    return v;
  };
  self = Promise.race([thenable]);
} finally {
  Promise.resolve = builtinResolve;
}
resolve(self);
self.then(function () {}, function (value) {
  if (!value) {
    return;
  }
  if (value.constructor !== TypeError) {
    return;
  }
});