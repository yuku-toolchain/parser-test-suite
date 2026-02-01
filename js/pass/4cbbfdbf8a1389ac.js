let callCount = 0;
let error;
function Constructor(executor) {
  function reject(result) {
    callCount += 1;
    error = result;
  }
  executor(() => {}, reject);
}
Constructor.resolve = function (v) {
  return v;
};
let p1OnRejected, p2OnRejected, p3OnRejected;
let p1 = {
  then(_, onRejected) {
    p1OnRejected = onRejected;
  }
};
let p2 = {
  then(_, onRejected) {
    p2OnRejected = onRejected;
  }
};
let p3 = {
  then(_, onRejected) {
    p3OnRejected = onRejected;
  }
};
Promise.any.call(Constructor, [p1, p2, p3]);
p1OnRejected('p1-rejection');
p1OnRejected('p1-rejection-unexpected-1');
p1OnRejected('p1-rejection-unexpected-2');
p2OnRejected('p2-rejection');
p3OnRejected('p3-rejection');