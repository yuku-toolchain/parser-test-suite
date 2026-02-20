var resolveP1, p1 = new Promise(function (resolve) {
  resolveP1 = resolve;
}), p2 = Promise.resolve(p1), arg = {};
p2.then(function (result) {}).then($DONE, $DONE);
resolveP1(arg);