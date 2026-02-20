var rejectP2, p1 = Promise.resolve(1), p2 = new Promise(function (resolve, reject) {
  rejectP2 = reject;
});
Promise.all([p1, p2]).then(function () {}, function (rejected) {}).then($DONE, $DONE);
rejectP2(2);