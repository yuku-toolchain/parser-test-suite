const WAIT_INDEX = 0;
const WAIT_FAKE = 1;
const RUNNING = 2;
const NOTIFY_INDEX = 3;
const NUMAGENT = 3;
const TIMEOUT_AGENT_MESSAGES = 2;
const BUFFER_SIZE = 4;
const TIMEOUT = $262.agent.timeouts.long;
for (var i = 0; i < NUMAGENT; i++) {
  $262.agent.start(`
    $262.agent.receiveBroadcast(function(sab) {
      const i32a = new Int32Array(sab);
      Atomics.add(i32a, ${RUNNING}, 1);
$262.agent.report("A " + Atomics.wait(i32a, ${WAIT_INDEX}, 0));
      $262.agent.leaving();
    });
  `);
}
$262.agent.start(`
  $262.agent.receiveBroadcast(function(sab) {
    const i32a = new Int32Array(sab);
    Atomics.add(i32a, ${RUNNING}, 1);
$262.agent.report("B " + Atomics.wait(i32a, ${WAIT_FAKE}, 0, ${TIMEOUT}));
const result = Atomics.load(i32a, ${NOTIFY_INDEX}) === 1
                   ? "timeout after Atomics.notify"
                   : "timeout before Atomics.notify";
    $262.agent.report("W " + result);
$262.agent.leaving();
  });
`);
const i32a = new Int32Array(new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * BUFFER_SIZE));
$262.agent.safeBroadcast(i32a);
$262.agent.waitUntil(i32a, RUNNING, NUMAGENT + 1);
$262.agent.tryYield();
Atomics.store(i32a, NOTIFY_INDEX, 1);
const reports = [];
for (var i = 0; i < NUMAGENT + TIMEOUT_AGENT_MESSAGES; i++) {
  reports.push($262.agent.getReport());
}
reports.sort();
for (var i = 0; i < NUMAGENT; i++) {}