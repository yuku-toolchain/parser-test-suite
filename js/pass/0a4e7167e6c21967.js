try {
  Promise.all({
    [Symbol.iterator]() {
      return true;
    }
  }).then(function () {}, function (error) {}).then($DONE, $DONE);
} catch (error) {}