let o = {
  x: 42,
  y: 39,
  z: 'cheeseburger'
};
let x, y, z;
let iterCount = 0;
async function* fn() {
  for await ({x, ...z} of [o]) {
    let keys = Object.getOwnPropertyNames(z);
    iterCount += 1;
  }
}
let promise = fn().next();
promise.then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE).then($DONE, $DONE);