try {
  Promise.race({
    [Symbol.iterator]() {
      return "";
    }
  }).then(function () {}, function (error) {}).then($DONE, $DONE);
} catch (error) {}