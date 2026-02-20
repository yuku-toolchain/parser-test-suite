async function* gen() {
  for await (var {w: {x, y, z} = undefined} of [{}]) {
    return;
  }
}
gen().next().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);