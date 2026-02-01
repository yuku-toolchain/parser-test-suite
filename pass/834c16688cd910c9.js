try {
  Promise.allSettled(false).then(function () {}, function (error) {}).then($DONE, $DONE);
} catch (error) {}