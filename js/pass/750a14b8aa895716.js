try {
  Promise.race({
    [Symbol.iterator]: ""
  }).then(function () {}, function (error) {}).then($DONE, $DONE);
} catch (error) {}