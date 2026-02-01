try {
  Promise.allSettled(Symbol()).then(function () {}, function (error) {}).then($DONE, $DONE);
} catch (error) {}