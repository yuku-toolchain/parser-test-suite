const i64a = new BigInt64Array(new SharedArrayBuffer(BigInt64Array.BYTES_PER_ELEMENT * 4));
const RUNNING = 1;
$262.agent.start(`
  const valueOf = {
    valueOf: function() {
      return false;
    }
  };
const toPrimitive = {
    [Symbol.toPrimitive]: function() {
      return false;
    }
  };
$262.agent.receiveBroadcast(function(sab) {
    const i64a = new BigInt64Array(sab);
    Atomics.add(i64a, ${RUNNING}, 1n);
const status1 = Atomics.wait(i64a, 0, 0n, false);
    const status2 = Atomics.wait(i64a, 0, 0n, valueOf);
    const status3 = Atomics.wait(i64a, 0, 0n, toPrimitive);
$262.agent.report(status1);
    $262.agent.report(status2);
    $262.agent.report(status3);
    $262.agent.leaving();
  });
`);
$262.agent.safeBroadcast(i64a);
$262.agent.waitUntil(i64a, RUNNING, 1n);
$262.agent.tryYield();