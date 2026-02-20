try {
  Promise.all({
    [Symbol.iterator]: true
  }).then(function () {}, function (error) {}).then($DONE, $DONE);
} catch (error) {}