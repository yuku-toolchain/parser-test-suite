var iterThrows = {};
Object.defineProperty(iterThrows, Symbol.iterator, {
  get: function () {
    throw new Error("abrupt completion");
  }
});
Promise.race(iterThrows).then(function () {}, function (err) {}).then($DONE, $DONE);