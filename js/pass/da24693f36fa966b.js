var p = (async () => await 1 + await 2)();
p.then(function (v) {}, $DONE);