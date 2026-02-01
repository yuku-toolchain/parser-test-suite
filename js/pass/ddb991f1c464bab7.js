let callCount = 0;
let sequence = [];
function Constructor(executor) {
  function resolve(value) {
    callCount += 1;
    sequence.push(value);
  }
  executor(resolve, Test262Error.thrower);
}
Constructor.resolve = function (v) {
  return v;
};
let pResolve;
let a = {
  then(resolver, rejector) {
    pResolve = resolver;
  }
};
Promise.any.call(Constructor, [a]);
pResolve(1);
pResolve(2);
pResolve(3);
checkSequence(sequence);