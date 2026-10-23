const WAIT_INDEX = 0;
const RUNNING = 1;
const NUMAGENT = 2;
const NOTIFYCOUNT = 2;
$262.agent.start(`
  $262.agent.receiveBroadcast(async (sab) => {
    var i64a = new BigInt64Array(sab);
    Atomics.add(i64a, ${RUNNING}, 1n);
$262.agent.report("A " + (await Atomics.waitAsync(i64a, undefined, 0n).value));
    $262.agent.leaving();
  });
`);
$262.agent.start(`
  $262.agent.receiveBroadcast(async (sab) => {
    var i64a = new BigInt64Array(sab);
    Atomics.add(i64a, ${RUNNING}, 1n);
$262.agent.report("B " + (await Atomics.waitAsync(i64a, undefined, 0n).value));
    $262.agent.leaving();
  });
`);
const i64a = new BigInt64Array(new SharedArrayBuffer(BigInt64Array.BYTES_PER_ELEMENT * 4));
$262.agent.safeBroadcastAsync(i64a, RUNNING, BigInt(NUMAGENT)).then(async agentCount => {
  const reports = [await $262.agent.getReportAsync(), await $262.agent.getReportAsync()];
  reports.sort();
}).then($DONE, $DONE);