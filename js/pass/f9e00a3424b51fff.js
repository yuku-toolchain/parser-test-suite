try {
  Promise.allSettled({
    [Symbol.iterator]() {
      return 1;
    }
  }).then(function () {}, function (error) {}).then($DONE, $DONE);
} catch (error) {}