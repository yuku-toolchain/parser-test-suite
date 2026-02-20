try {
  Promise.allSettled(null).then(function () {}, function (error) {}).then($DONE, $DONE);
} catch (error) {}