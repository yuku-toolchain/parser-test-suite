const RUNNING = 1;
$262.agent.start(`
  const poisonedValueOf = {
    valueOf() {
      throw new Error('should not evaluate this code');
    }
  };
const poisonedToPrimitive = {
    [Symbol.toPrimitive]() {
      throw new Error('passing a poisoned object using @@ToPrimitive');
    }
  };
$262.agent.receiveBroadcast(function(sab) {
    const i64a = new BigInt64Array(sab);
    Atomics.add(i64a, ${RUNNING}, 1n);
let status1 = '';
    let status2 = '';
try {
      Atomics.waitAsync(i64a, 0, 0n, poisonedValueOf);
    } catch (error) {
      status1 = 'poisonedValueOf';
    }
    try {
      Atomics.waitAsync(i64a, 0, 0n, poisonedToPrimitive);
    } catch (error) {
      status2 = 'poisonedToPrimitive';
    }
$262.agent.report(status1);
    $262.agent.report(status2);
    $262.agent.leaving();
  });
`);
const i64a = new BigInt64Array(new SharedArrayBuffer(BigInt64Array.BYTES_PER_ELEMENT * 4));
$262.agent.safeBroadcastAsync(i64a, RUNNING, 1n).then(async agentCount => {}).then($DONE, $DONE);