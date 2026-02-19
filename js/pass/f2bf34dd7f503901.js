const RUNNING = 1;
$262.agent.start(`
  const valueOf = {
    valueOf() {
      return 0;
    }
  };
const toString = {
    toString() {
      return "0";
    }
  };
const toPrimitive = {
    [Symbol.toPrimitive]() {
      return 0;
    }
  };
$262.agent.receiveBroadcast(async (sab) => {
    const i32a = new Int32Array(sab);
    Atomics.add(i32a, ${RUNNING}, 1);
    $262.agent.report(await Atomics.waitAsync(i32a, 0, 0, valueOf).value);
    $262.agent.report(await Atomics.waitAsync(i32a, 0, 0, toString).value);
    $262.agent.report(await Atomics.waitAsync(i32a, 0, 0, toPrimitive).value);
    $262.agent.report(Atomics.waitAsync(i32a, 0, 0, valueOf).value);
    $262.agent.report(Atomics.waitAsync(i32a, 0, 0, toString).value);
    $262.agent.report(Atomics.waitAsync(i32a, 0, 0, toPrimitive).value);
    $262.agent.leaving();
  });
`);
const i32a = new Int32Array(new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 4));
$262.agent.safeBroadcastAsync(i32a, RUNNING, 1).then(async agentCount => {}).then($DONE, $DONE);