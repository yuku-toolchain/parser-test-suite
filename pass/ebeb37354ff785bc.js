try {
  Promise.any(Symbol()).then(function () {}, function (error) {}).then($DONE, $DONE);
} catch (error) {}