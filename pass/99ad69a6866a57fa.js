try {
  Promise.race(undefined).then(function () {}, function (error) {}).then($DONE, $DONE);
} catch (error) {}