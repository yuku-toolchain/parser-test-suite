try {
  Promise.race({
    [Symbol.iterator]() {
      return Symbol();
    }
  }).then(function () {}, function (error) {}).then($DONE, $DONE);
} catch (error) {}