try {
  Promise.all({
    [Symbol.iterator]() {
      return false;
    }
  }).then(function () {}, function (error) {}).then($DONE, $DONE);
} catch (error) {}