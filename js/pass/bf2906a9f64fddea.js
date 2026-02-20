const i64a = new BigInt64Array(new SharedArrayBuffer(BigInt64Array.BYTES_PER_ELEMENT * 4));
const RUNNING = 1;
$262.agent.start(`
  $262.agent.receiveBroadcast(function(sab) {
    const i64a = new BigInt64Array(sab);
    Atomics.add(i64a, ${RUNNING}, 1n);
$262.agent.report(Atomics.wait(i64a, 0, 0n, NaN));
    $262.agent.leaving();
  });
`);
$262.agent.safeBroadcast(i64a);
$262.agent.waitUntil(i64a, RUNNING, 1n);
$262.agent.tryYield();