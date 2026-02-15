try {
  Promise.any({
    [Symbol.iterator]: Symbol()
  }).then(function () {}, function (error) {}).then($DONE, $DONE);
} catch (error) {}