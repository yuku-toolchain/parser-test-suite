try {
  Promise.all({
    [Symbol.iterator]: undefined
  }).then(function () {}, function (error) {}).then($DONE, $DONE);
} catch (error) {}