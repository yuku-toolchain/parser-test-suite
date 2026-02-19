var sequence = [];
var yesValue = {};
var yes = Promise.resolve(yesValue);
yes.then = function () {
  sequence.push(1);
  return Promise.prototype.then.apply(this, arguments);
};
var noReason = {};
var no = Promise.reject(noReason);
no.then = function () {
  sequence.push(4);
  return Promise.prototype.then.apply(this, arguments);
};
yes.then(function (x) {
  sequence.push(2);
  return x;
}).finally(function () {
  sequence.push(3);
  return no;
}).catch(function (e) {
  sequence.push(5);
}).then(function () {
  checkSequence(sequence, "All expected callbacks called in correct order");
}).then($DONE, $DONE);