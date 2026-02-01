const NUMAGENT = 2;
const RUNNING = 4;
$262.agent.start(`
  $262.agent.receiveBroadcast(async (sab) => {
    const i32a = new Int32Array(sab);
    Atomics.add(i32a, ${RUNNING}, 1);
$262.agent.report(await Atomics.waitAsync(i32a, 0, 0, Infinity).value);
    $262.agent.leaving();
  });
`);
$262.agent.start(`
  $262.agent.receiveBroadcast(async (sab) => {
    const i32a = new Int32Array(sab);
    Atomics.add(i32a, ${RUNNING}, 1);
$262.agent.report(await Atomics.waitAsync(i32a, 2, 0, Infinity).value);
    $262.agent.leaving();
  });
`);
const i32a = new Int32Array(new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 5));
$262.agent.safeBroadcastAsync(i32a, RUNNING, NUMAGENT).then(async agentCount => {}).then($DONE, $DONE);