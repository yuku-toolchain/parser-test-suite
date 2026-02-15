const RUNNING = 1;
const value = 42;
$262.agent.start(`
  $262.agent.receiveBroadcast(function(sab) {
    const i32a = new Int32Array(sab);
    Atomics.add(i32a, ${RUNNING}, 1);
$262.agent.report(Atomics.store(i32a, 0, ${value}));
    $262.agent.report(Atomics.waitAsync(i32a, 0, 0).value);
    $262.agent.leaving();
  });
`);
const i32a = new Int32Array(new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 4));
$262.agent.safeBroadcastAsync(i32a, RUNNING, 1).then(async agentCount => {}).then($DONE, $DONE);