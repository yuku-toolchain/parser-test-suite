const RUNNING = 1;
$262.agent.start(`
  $262.agent.receiveBroadcast(function(sab) {
    const i32a = new Int32Array(sab);
    Atomics.add(i32a, ${RUNNING}, 1);
let status1 = '';
    let status2 = '';
try {
      Atomics.waitAsync(i32a, 0, 0, Symbol('1'));
    } catch (error) {
      status1 = 'A ' + error.name;
    }
    try {
      Atomics.waitAsync(i32a, 0, 0, Symbol('2'));
    } catch (error) {
      status2 = 'B ' + error.name;
    }
$262.agent.report(status1);
    $262.agent.report(status2);
    $262.agent.leaving();
  });
`);
const i32a = new Int32Array(new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 4));
$262.agent.safeBroadcastAsync(i32a, RUNNING, 1).then(async agentCount => {}).then($DONE, $DONE);