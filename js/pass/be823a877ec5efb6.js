try {
  Promise.allSettled({
    [Symbol.iterator]() {
      return null;
    }
  }).then(function () {}, function (error) {}).then($DONE, $DONE);
} catch (error) {}