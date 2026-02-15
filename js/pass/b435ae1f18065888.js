function hasOwnProperty(obj, property) {
  return Object.prototype.hasOwnProperty.call(obj, property);
}
async function fn() {
  const ns = await import('./get-nested-namespace-props-nrml-1_FIXTURE.js');
}
fn().then($DONE, $DONE).catch($DONE);