async function* gen() {
  for await (const {w: {x, y, z} = undefined} of [{}]) {
    return;
  }
}
gen().next().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);