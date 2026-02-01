try {
  Promise.all({
    [Symbol.iterator]() {
      return null;
    }
  }).then(function () {}, function (error) {}).then($DONE, $DONE);
} catch (error) {}