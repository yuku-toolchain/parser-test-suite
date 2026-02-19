try {
  Promise.all(1).then(function () {}, function (error) {}).then($DONE, $DONE);
} catch (error) {}