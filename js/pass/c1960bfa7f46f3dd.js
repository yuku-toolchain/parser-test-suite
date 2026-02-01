try {
  Promise.any(1).then(function () {}, function (error) {}).then($DONE, $DONE);
} catch (error) {}