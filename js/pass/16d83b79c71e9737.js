try {
  Promise.allSettled('').then(function (v) {}, function () {}).then($DONE, $DONE);
} catch (error) {}