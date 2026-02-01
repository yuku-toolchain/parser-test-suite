const WAIT_INDEX = 0;
const RUNNING = 1;
const NUMAGENT = 2;
const NOTIFYCOUNT = 2;
$262.agent.start(`
  $262.agent.receiveBroadcast(function(sab) {
    var i32a = new Int32Array(sab);
    Atomics.add(i32a, ${RUNNING}, 1);
$262.agent.report("A " + Atomics.wait(i32a, 0, 0, undefined));
    $262.agent.leaving();
  });
`);
$262.agent.start(`
  $262.agent.receiveBroadcast(function(sab) {
    var i32a = new Int32Array(sab);
    Atomics.add(i32a, ${RUNNING}, 1);
$262.agent.report("B " + Atomics.wait(i32a, 0, 0));
    $262.agent.leaving();
  });
`);
const i32a = new Int32Array(new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 4));
$262.agent.safeBroadcast(i32a);
$262.agent.waitUntil(i32a, RUNNING, NUMAGENT);
$262.agent.tryYield();
const reports = [];
for (var i = 0; i < NUMAGENT; i++) {
  reports.push($262.agent.getReport());
}
reports.sort();