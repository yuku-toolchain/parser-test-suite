$262.agent.start(`
  (async () => {
    var sab = new SharedArrayBuffer(1024);
    var good_indices = [ (view) => 0/-1,
                         (view) => '-0',
                         (view) => view.length - 1,
                         (view) => ({ valueOf: () => 0 }),
                         (view) => ({ toString: () => '0', valueOf: false })
                       ];
var view = new Int32Array(sab, 32, 20);
view[0] = 0;
    $262.agent.report("A " + (await Atomics.waitAsync(view, 0, 0, 0).value))
    $262.agent.report("B " + (await Atomics.waitAsync(view, 0, 37, 0).value));
const results = [];
for ( let IdxGen of good_indices ) {
        let Idx = IdxGen(view);
        view.fill(0);
Atomics.store(view, Idx, 37);
        results.push(await Atomics.waitAsync(view, Idx, 0).value);
    }
    $262.agent.report("C " + results.join(","));
    $262.agent.leaving();
  })();
`);