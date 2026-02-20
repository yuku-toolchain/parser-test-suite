const RUNNING = 1;
const value = 42n;
$262.agent.start(`
  $262.agent.receiveBroadcast(function(sab) {
    const i64a = new BigInt64Array(sab);
    Atomics.add(i64a, ${RUNNING}, 1n);
    $262.agent.report(Atomics.store(i64a, 0, 42n));
    $262.agent.report(Atomics.waitAsync(i64a, 0, 0n).value);
    $262.agent.leaving();
  });
`);
const i64a = new BigInt64Array(new SharedArrayBuffer(BigInt64Array.BYTES_PER_ELEMENT * 4));
$262.agent.safeBroadcastAsync(i64a, RUNNING, 1n).then(async agentCount => {}).then($DONE, $DONE);