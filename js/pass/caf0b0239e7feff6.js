var iterThrows = {};
Object.defineProperty(iterThrows, Symbol.iterator, {
  get: function () {
    return {
      next: function () {
        var v = {};
        Object.defineProperty(v, 'value', {
          get: function () {
            throw new Error("abrupt completion");
          }
        });
        return v;
      }
    };
  }
});
Promise.race(iterThrows).then(function () {}, function (err) {}).then($DONE, $DONE);