class MyPromise extends Promise {}
var mp1Value = {};
var mp1 = MyPromise.reject(mp1Value);
var mp2 = MyPromise.reject(42);
var thenCalls = [];
var then = Promise.prototype.then;
Promise.prototype.then = function (resolve, reject) {
  thenCalls.push({
    promise: this,
    resolve,
    reject
  });
  return then.call(this, resolve, reject);
};
mp1.finally(() => mp2).then(value => {}, () => {
  var mp2Calls = thenCalls.filter(c => c.promise === mp2);
  var thrown = false;
  try {
    mp2Calls[0].resolve();
  } catch (error) {
    thrown = true;
  }
}).then($DONE, $DONE);