try {
  Promise.any(false).then(function () {}, function (error) {}).then($DONE, $DONE);
} catch (error) {}