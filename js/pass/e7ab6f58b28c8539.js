var resolveP, p = new Promise(function (resolve) {
  resolveP = resolve;
});
resolveP(p);
p.then(function () {}, function (err) {}).then($DONE, $DONE);