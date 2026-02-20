try {
  Promise.all(true).then(function () {}, function (error) {}).then($DONE, $DONE);
} catch (error) {}