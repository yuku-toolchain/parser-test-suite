try {
  Promise.allSettled(undefined).then(function () {}, function (error) {}).then($DONE, $DONE);
} catch (error) {}