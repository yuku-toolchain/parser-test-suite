try {
  Promise.all(false).then(function () {}, function (error) {}).then($DONE, $DONE);
} catch (error) {}