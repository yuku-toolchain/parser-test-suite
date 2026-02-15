var iterThrows = {};
Object.defineProperty(iterThrows, Symbol.iterator, {
  get: function () {
    throw new Error("abrupt completion");
  }
});
Promise.all(iterThrows).then(function () {}, function (err) {}).then($DONE, $DONE);