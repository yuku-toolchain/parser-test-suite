const i32a = new Int32Array(new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 4));
const valueOf = {
  valueOf() {
    return true;
  }
};
const toPrimitive = {
  [Symbol.toPrimitive]() {
    return true;
  }
};
let outcomes = [];
let lifespan = 1000;
let start = $262.agent.monotonicNow();
(function wait() {
  let elapsed = $262.agent.monotonicNow() - start;
  if (elapsed > lifespan) {
    return;
  }
  if (outcomes.length) {
    return;
  }
  $262.agent.setTimeout(wait, 0);
})();
Promise.all([Atomics.waitAsync(i32a, 0, 0, true).value, Atomics.waitAsync(i32a, 0, 0, valueOf).value, Atomics.waitAsync(i32a, 0, 0, toPrimitive).value]).then(results => outcomes = results, $DONE);