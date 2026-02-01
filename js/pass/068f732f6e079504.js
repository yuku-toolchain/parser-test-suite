try {
  Promise.allSettled({
    [Symbol.iterator]: 1
  }).then(function () {}, function (error) {}).then($DONE, $DONE);
} catch (error) {}