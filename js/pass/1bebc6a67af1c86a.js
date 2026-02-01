try {
  Promise.all({
    [Symbol.iterator]: null
  }).then(function () {}, function (error) {}).then($DONE, $DONE);
} catch (error) {}