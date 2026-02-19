let callCount = 0;
let sequence = [];
function Constructor(executor) {
  function reject(value) {
    callCount += 1;
    sequence.push(value);
  }
  executor(() => {}, reject);
}
Constructor.resolve = function (v) {
  return v;
};
let pReject;
let a = {
  then(_, rejecter) {
    pReject = rejecter;
  }
};
Promise.race.call(Constructor, [a]);
pReject(1);
pReject(2);
pReject(3);
checkSequence(sequence);