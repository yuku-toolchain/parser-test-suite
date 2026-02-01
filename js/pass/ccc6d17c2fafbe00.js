try {
  Promise.allSettled({
    [Symbol.iterator]() {
      return undefined;
    }
  }).then(function () {}, function (error) {}).then($DONE, $DONE);
} catch (error) {}