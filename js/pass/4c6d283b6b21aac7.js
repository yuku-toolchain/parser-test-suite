try {
  Promise.race({
    [Symbol.iterator]: true
  }).then(function () {}, function (error) {}).then($DONE, $DONE);
} catch (error) {}