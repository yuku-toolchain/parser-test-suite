try {
  Promise.any({
    [Symbol.iterator]: false
  }).then(function () {}, function (error) {}).then($DONE, $DONE);
} catch (error) {}