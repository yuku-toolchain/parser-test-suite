try {
  Promise.race(null).then(function () {}, function (error) {}).then($DONE, $DONE);
} catch (error) {}