try {
  Promise.any(undefined).then(function () {}, function (error) {}).then($DONE, $DONE);
} catch (error) {}