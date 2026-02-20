try {
  Promise.all(undefined).then(function () {}, function (error) {}).then($DONE, $DONE);
} catch (error) {}