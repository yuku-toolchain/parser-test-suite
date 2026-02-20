try {
  Promise.race({
    [Symbol.iterator]: false
  }).then(function () {}, function (error) {}).then($DONE, $DONE);
} catch (error) {}