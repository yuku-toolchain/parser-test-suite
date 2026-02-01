try {
  Promise.allSettled({
    [Symbol.iterator]: undefined
  }).then(function () {}, function (error) {}).then($DONE, $DONE);
} catch (error) {}