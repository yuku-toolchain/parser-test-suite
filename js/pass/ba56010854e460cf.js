try {
  Promise.any(true).then(function () {}, function (error) {}).then($DONE, $DONE);
} catch (error) {}