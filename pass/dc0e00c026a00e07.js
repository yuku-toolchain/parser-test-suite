async function* g() {}
var errormessage = "Promise rejected.";
var result = g().throw(new Test262Error(errormessage));
result.then(function () {}, function (e) {
  if (!(e.message = errormessage)) {}
}).then($DONE, $DONE);