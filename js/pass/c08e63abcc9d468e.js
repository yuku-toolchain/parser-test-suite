try {
  Promise.all(null).then(function () {}, function (error) {}).then($DONE, $DONE);
} catch (error) {}