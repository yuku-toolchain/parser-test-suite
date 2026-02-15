Object.defineProperty(Array.prototype, 0, {
  set: function () {}
});
Promise.all([42]).then(function () {}, $DONE);