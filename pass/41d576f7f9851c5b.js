try {
  Promise.any({
    [Symbol.iterator]: null
  }).then(function () {}, function (error) {}).then($DONE, $DONE);
} catch (error) {}