try {
  Promise.allSettled(1).then(function () {}, function (error) {}).then($DONE, $DONE);
} catch (error) {}