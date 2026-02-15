var sequence = [];
var original = {};
var thrown = {};
var p = Promise.reject(original);
p.finally(function () {
  sequence.push(1);
  throw thrown;
}).then(function () {}).catch(function (reason) {
  sequence.push(2);
}).then(function () {
  checkSequence(sequence, "All expected callbacks called in correct order");
}).then($DONE, $DONE);