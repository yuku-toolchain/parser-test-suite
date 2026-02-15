try {
  Promise.race("a").then(function (v) {}, function () {}).then($DONE, $DONE);
} catch (error) {}