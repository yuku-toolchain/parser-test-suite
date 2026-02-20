let rest;
let obj = {
  a: 3,
  b: 4
};
Object.defineProperty(obj, "x", {
  value: 4,
  enumerable: false
});
let iterCount = 0;
async function* fn() {
  for await ({...rest} of [obj]) {
    iterCount += 1;
  }
}
let promise = fn().next();
promise.then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE).then($DONE, $DONE);