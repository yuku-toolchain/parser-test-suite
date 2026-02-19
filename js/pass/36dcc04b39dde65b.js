try {
  Promise.allSettled({
    [Symbol.iterator]: Symbol()
  }).then(function () {}, function (error) {}).then($DONE, $DONE);
} catch (error) {}