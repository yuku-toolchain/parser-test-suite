const i64a = new BigInt64Array(new SharedArrayBuffer(BigInt64Array.BYTES_PER_ELEMENT * 4));
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
Promise.all([Atomics.waitAsync(i64a, 0, 0n, true).value, Atomics.waitAsync(i64a, 0, 0n, valueOf).value, Atomics.waitAsync(i64a, 0, 0n, toPrimitive).value]).then(results => outcomes = results, $DONE);