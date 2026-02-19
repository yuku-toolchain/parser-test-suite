const RUNNING = 1;
$262.agent.start(`
  const valueOf = {
    valueOf() {
      return false;
    }
  };
const toPrimitive = {
    [Symbol.toPrimitive]() {
      return false;
    }
  };
$262.agent.receiveBroadcast(async (sab) => {
    const i64a = new BigInt64Array(sab);
    Atomics.add(i64a, ${RUNNING}, 1n);
    $262.agent.report(await Atomics.waitAsync(i64a, 0, 0n, false).value);
    $262.agent.report(await Atomics.waitAsync(i64a, 0, 0n, valueOf).value);
    $262.agent.report(await Atomics.waitAsync(i64a, 0, 0n, toPrimitive).value);
    $262.agent.report(Atomics.waitAsync(i64a, 0, 0n, false).value);
    $262.agent.report(Atomics.waitAsync(i64a, 0, 0n, valueOf).value);
    $262.agent.report(Atomics.waitAsync(i64a, 0, 0n, toPrimitive).value);
    $262.agent.leaving();
  });
`);
const i64a = new BigInt64Array(new SharedArrayBuffer(BigInt64Array.BYTES_PER_ELEMENT * 4));
$262.agent.safeBroadcastAsync(i64a, RUNNING, 1n).then(async agentCount => {}).then($DONE, $DONE);