var obj = Object.create({
  hit: true
});
var iter, iterResult, value;
Boolean.prototype[Symbol.iterator] = function* () {
  yield this.valueOf();
};
function* g() {
  value = yield* ('hit' in obj);
  value = yield* ('miss' in obj);
}
iter = g();
iterResult = iter.next('first');
iterResult = iter.next('second');
iterResult = iter.next('third');