var resolveP1, rejectP2, p1 = new Promise(function (resolve) {
  resolveP1 = resolve;
}), p2 = new Promise(function (resolve, reject) {
  rejectP2 = reject;
});
Promise.race([p1, p2]).then(function () {}, function (result) {}).then($DONE, $DONE);
rejectP2(2);
resolveP1(1);