const RUNNING = 0;
const WAIT_INDEX = 1;
const BUFFER_SIZE = 2;
const NUMAGENT = 4;
for (var i = 0; i < NUMAGENT; i++) {
  $262.agent.start(`
    $262.agent.receiveBroadcast(function(sab) {
      const i32a = new Int32Array(sab);
      Atomics.add(i32a, ${RUNNING}, 1);
var status = Atomics.wait(i32a, ${WAIT_INDEX}, 0);
var name = String.fromCharCode(0x41 + ${i});
      $262.agent.report(name + " " + status);
      $262.agent.leaving();
    });
  `);
}
const i32a = new Int32Array(new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * BUFFER_SIZE));
$262.agent.safeBroadcast(i32a);
$262.agent.waitUntil(i32a, RUNNING, NUMAGENT);
$262.agent.tryYield();
const reports = [];
for (var i = 0; i < NUMAGENT; i++) {
  reports.push($262.agent.getReport());
}
reports.sort();