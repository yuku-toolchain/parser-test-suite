try {
  Promise.all({
    [Symbol.iterator]() {
      return 1;
    }
  }).then(function () {}, function (error) {}).then($DONE, $DONE);
} catch (error) {}