$262.agent.start(`
  (async () => {
    var sab = new SharedArrayBuffer(2048);
    var good_indices = [ (view) => 0/-1,
                         (view) => '-0',
                         (view) => view.length - 1,
                         (view) => ({ valueOf: () => 0 }),
                         (view) => ({ toString: () => '0', valueOf: false })
                       ];
var view = new BigInt64Array(sab, 32, 20);
view[0] = 0n;
    $262.agent.report("A " + (await Atomics.waitAsync(view, 0, 0n, 0).value))
    $262.agent.report("B " + (await Atomics.waitAsync(view, 0, 37n, 0).value));
const results = [];
for ( let IdxGen of good_indices ) {
        let Idx = IdxGen(view);
        view.fill(0n);
Atomics.store(view, Idx, 37n);
        results.push(await Atomics.waitAsync(view, Idx, 0n).value);
    }
    $262.agent.report("C " + results.join(","));
$262.agent.leaving();
  })();
`);