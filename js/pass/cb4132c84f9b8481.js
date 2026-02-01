try {
  Promise.allSettled({
    [Symbol.iterator]: true
  }).then(function () {}, function (error) {}).then($DONE, $DONE);
} catch (error) {}