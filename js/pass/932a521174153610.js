try {
  Promise.all(Symbol()).then(function () {}, function (error) {}).then($DONE, $DONE);
} catch (error) {}