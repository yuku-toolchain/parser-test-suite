const WAIT_INDEX = 0;
const WAIT_FAKE = 1;
const RUNNING = 2;
const NOTIFY_INDEX = 3;
const NUMAGENT = 3;
const TIMEOUT_AGENT_MESSAGES = 2;
const BUFFER_SIZE = 4;
const TIMEOUT = $262.agent.timeouts.long;
const i64a = new BigInt64Array(new SharedArrayBuffer(BigInt64Array.BYTES_PER_ELEMENT * BUFFER_SIZE));
for (var i = 0; i < NUMAGENT; i++) {
  $262.agent.start(`
    $262.agent.receiveBroadcast(function(sab) {
      const i64a = new BigInt64Array(sab);
      Atomics.add(i64a, ${RUNNING}, 1n);
$262.agent.report("A " + Atomics.wait(i64a, ${WAIT_INDEX}, 0n));
      $262.agent.leaving();
    });
  `);
}
$262.agent.start(`
  $262.agent.receiveBroadcast(function(sab) {
    const i64a = new BigInt64Array(sab);
    Atomics.add(i64a, ${RUNNING}, 1n);
$262.agent.report("B " + Atomics.wait(i64a, ${WAIT_FAKE}, 0n, ${TIMEOUT}));
const result = Atomics.load(i64a, ${NOTIFY_INDEX}) === 1n
                   ? "timeout after Atomics.notify"
                   : "timeout before Atomics.notify";
    $262.agent.report("W " + result);
$262.agent.leaving();
  });
`);
$262.agent.safeBroadcast(i64a);
$262.agent.waitUntil(i64a, RUNNING, BigInt(NUMAGENT + 1));
$262.agent.tryYield();
Atomics.store(i64a, NOTIFY_INDEX, 1n);
const reports = [];
for (var i = 0; i < NUMAGENT + TIMEOUT_AGENT_MESSAGES; i++) {
  reports.push($262.agent.getReport());
}
reports.sort();
for (var i = 0; i < NUMAGENT; i++) {}