$262.agent.start(`
  var sab = new SharedArrayBuffer(1024);
  var ab = new ArrayBuffer(16);
var good_indices = [ (view) => 0/-1,
                       (view) => '-0',
                       (view) => view.length - 1,
                       (view) => ({ valueOf: () => 0 }),
                       (view) => ({ toString: () => '0', valueOf: false })
                     ];
var view = new Int32Array(sab, 32, 20);
view[0] = 0;
  $262.agent.report("A " + Atomics.wait(view, 0, 0, 0))
  $262.agent.report("B " + Atomics.wait(view, 0, 37, 0));
for ( let IdxGen of good_indices ) {
      let Idx = IdxGen(view);
      view.fill(0);
Atomics.store(view, Idx, 37);
      $262.agent.report("C " + Atomics.wait(view, Idx, 0));
  }
$262.agent.report("done");
  $262.agent.leaving();
`);
var r;
while ((r = $262.agent.getReport()) !== "done") {}