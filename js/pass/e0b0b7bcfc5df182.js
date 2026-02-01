try {
  Promise.all({
    [Symbol.iterator]: Symbol()
  }).then(function () {}, function (error) {}).then($DONE, $DONE);
} catch (error) {}