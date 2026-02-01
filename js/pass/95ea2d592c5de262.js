try {
  Promise.allSettled({
    [Symbol.iterator]: ''
  }).then(function () {}, function (error) {}).then($DONE, $DONE);
} catch (error) {}