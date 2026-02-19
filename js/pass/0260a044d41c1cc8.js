try {
  Promise.any(null).then(function () {}, function (error) {}).then($DONE, $DONE);
} catch (error) {}