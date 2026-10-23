const RUNNING = 1;
$262.agent.start(`
  const poisonedValueOf = {
    valueOf() {
      throw new Test262Error('should not evaluate this code');
    }
  };
const poisonedToPrimitive = {
    [Symbol.toPrimitive]() {
      throw new Test262Error('should not evaluate this code');
    }
  };
$262.agent.receiveBroadcast(function(sab) {
    const i64a = new BigInt64Array(sab);
    Atomics.add(i64a, ${RUNNING}, 1n);
let status1 = '';
    let status2 = '';
try {
      Atomics.waitAsync(i64a, Symbol('1'), poisonedValueOf, poisonedValueOf);
    } catch (error) {
      status1 = 'A ' + error.name;
    }
    try {
      Atomics.waitAsync(i64a, Symbol('2'), poisonedToPrimitive, poisonedToPrimitive);
    } catch (error) {
      status2 = 'B ' + error.name;
    }
$262.agent.report(status1);
    $262.agent.report(status2);
    $262.agent.leaving();
  });
`);
const i64a = new BigInt64Array(new SharedArrayBuffer(BigInt64Array.BYTES_PER_ELEMENT * 4));
$262.agent.safeBroadcastAsync(i64a, RUNNING, 1n).then(async agentCount => {}).then($DONE, $DONE);