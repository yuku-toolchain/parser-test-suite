try {
  Promise.race(Symbol()).then(function () {}, function (error) {}).then($DONE, $DONE);
} catch (error) {}