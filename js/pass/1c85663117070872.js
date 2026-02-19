var rejectP1, p1 = new Promise(function (resolve, reject) {
  rejectP1 = reject;
}), p2 = Promise.resolve(p1), arg = {};
p2.then(function () {}, function (result) {}).then($DONE, $DONE);
rejectP1(arg);