const RUNNING = 1;
const TIMEOUT = $262.agent.timeouts.long;
$262.agent.start(`
  $262.agent.receiveBroadcast(function(sab) {
    const i32a = new Int32Array(sab);
    Atomics.add(i32a, ${RUNNING}, 1);
$262.agent.report(Atomics.wait(i32a, 0, 0, ${TIMEOUT}));
    $262.agent.leaving();
  });
`);
const i32a = new Int32Array(new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 4));
$262.agent.safeBroadcast(i32a);
$262.agent.waitUntil(i32a, RUNNING, 1);
$262.agent.tryYield();
$262.agent.trySleep(TIMEOUT);