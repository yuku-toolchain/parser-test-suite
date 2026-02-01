var sequence = [];
var obj = {};
var p = Promise.resolve(obj);
p.finally(function () {
  sequence.push(1);
  return {};
}).then(function (x) {
  sequence.push(2);
}).then(function () {
  checkSequence(sequence, "All expected callbacks called in correct order");
}).then($DONE, $DONE);