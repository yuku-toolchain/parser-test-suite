try {
  Promise.race(false).then(function () {}, function (error) {}).then($DONE, $DONE);
} catch (error) {}