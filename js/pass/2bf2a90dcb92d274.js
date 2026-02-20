const NUMAGENT = 2;
const RUNNING = 4;
$262.agent.start(`
  $262.agent.receiveBroadcast(async (sab) => {
    const i64a = new BigInt64Array(sab);
    Atomics.add(i64a, ${RUNNING}, 1n);
$262.agent.report(await Atomics.waitAsync(i64a, 0, 0n, Infinity).value);
    $262.agent.leaving();
  });
`);
$262.agent.start(`
  $262.agent.receiveBroadcast(async (sab) => {
    const i64a = new BigInt64Array(sab);
    Atomics.add(i64a, ${RUNNING}, 1n);
$262.agent.report(await Atomics.waitAsync(i64a, 2, 0n, Infinity).value);
    $262.agent.leaving();
  });
`);
const i64a = new BigInt64Array(new SharedArrayBuffer(BigInt64Array.BYTES_PER_ELEMENT * 5));
$262.agent.safeBroadcastAsync(i64a, RUNNING, BigInt(NUMAGENT)).then(async agentCount => {}).then($DONE, $DONE);