Object.defineProperty(Array.prototype, 0, {
  set() {}
});
Promise.allSettled([42]).then(function () {}, $DONE);