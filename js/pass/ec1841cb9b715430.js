const RUNNING = 1;
$262.agent.start(`
  const poisonedValueOf = {
    valueOf: function() {
      throw new Test262Error('should not evaluate this code');
    }
  };
const poisonedToPrimitive = {
    [Symbol.toPrimitive]: function() {
      throw new Test262Error("passing a poisoned object using @@ToPrimitive");
    }
  };
$262.agent.receiveBroadcast(function(sab) {
    const i32a = new Int32Array(sab);
    Atomics.add(i32a, ${RUNNING}, 1);
let status1 = "";
    let status2 = "";
try {
      Atomics.wait(i32a, Symbol("1"), poisonedValueOf, poisonedValueOf);
    } catch (error) {
      status1 = 'Symbol("1")';
    }
    try {
      Atomics.wait(i32a, Symbol("2"), poisonedToPrimitive, poisonedToPrimitive);
    } catch (error) {
      status2 = 'Symbol("2")';
    }
$262.agent.report(status1);
    $262.agent.report(status2);
    $262.agent.leaving();
  });
`);
const i32a = new Int32Array(new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 4));
$262.agent.safeBroadcast(i32a);
$262.agent.waitUntil(i32a, RUNNING, 1);
$262.agent.tryYield();