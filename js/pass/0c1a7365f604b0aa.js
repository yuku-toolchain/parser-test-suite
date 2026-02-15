try {
  Promise.race(true).then(function () {}, function (error) {}).then($DONE, $DONE);
} catch (error) {}