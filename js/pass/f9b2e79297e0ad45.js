try {
  Promise.race({
    [Symbol.iterator]: Symbol()
  }).then(function () {}, function (error) {}).then($DONE, $DONE);
} catch (error) {}