const NUMAGENT = 3;
const WAIT_INDEX = 0;
const SPIN = 1;
const RUNNING = SPIN + NUMAGENT;
const BUFFER_SIZE = RUNNING + 1;
for (var i = 0; i < NUMAGENT; i++) {
  $262.agent.start(`
    $262.agent.receiveBroadcast(function(sab) {
      const i32a = new Int32Array(sab);
      Atomics.add(i32a, ${RUNNING}, 1);
while (Atomics.load(i32a, ${SPIN + i}) === 0) {
}
$262.agent.report(${i});
      Atomics.wait(i32a, ${WAIT_INDEX}, 0);
      $262.agent.report(${i});
$262.agent.leaving();
    });
  `);
}
const i32a = new Int32Array(new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * BUFFER_SIZE));
$262.agent.safeBroadcast(i32a);
$262.agent.waitUntil(i32a, RUNNING, NUMAGENT);
var waiterlist = [];
for (var i = 0; i < NUMAGENT; i++) {
  waiterlist.push($262.agent.getReport());
  $262.agent.tryYield();
}
var notified = [];
for (var i = 0; i < NUMAGENT; i++) {
  notified.push($262.agent.getReport());
}