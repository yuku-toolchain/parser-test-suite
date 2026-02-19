try {
  Promise.allSettled(true).then(function () {}, function (error) {}).then($DONE, $DONE);
} catch (error) {}