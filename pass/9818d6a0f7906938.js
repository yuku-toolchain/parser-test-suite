try {
  Promise.race({
    [Symbol.iterator]: undefined
  }).then(function () {}, function (error) {}).then($DONE, $DONE);
} catch (error) {}