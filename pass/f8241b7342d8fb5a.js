async function fn() {
  const ns = await import('./get-nested-namespace-dflt-skip-prod_FIXTURE.js');
  var desc = Object.getOwnPropertyDescriptor(ns, 'productionNS2');
  var keys = Object.getOwnPropertyNames(ns.productionNS2);
  desc = Object.getOwnPropertyDescriptor(ns.productionNS2, 'productionOther');
  desc = Object.getOwnPropertyDescriptor(ns.productionNS2, 'default');
}
fn().then($DONE, $DONE).catch($DONE);