var quickIter = {};
var exprValue, nextReceived, done, iter;
quickIter[Symbol.iterator] = function () {
  return {
    next: function (x) {
      nextReceived = x;
      return {
        done: done,
        value: 3333
      };
    }
  };
};
function* g() {
  exprValue = yield* quickIter;
}
done = true;
iter = g();
iter.next(4444);
done = false;
exprValue = null;
iter = g();
iter.next(2222);
done = true;
iter.next(5555);