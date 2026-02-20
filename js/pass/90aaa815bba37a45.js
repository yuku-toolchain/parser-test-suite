try {
  Promise.any({
    [Symbol.iterator]: ''
  }).then(function () {}, function (error) {}).then($DONE, $DONE);
} catch (error) {}