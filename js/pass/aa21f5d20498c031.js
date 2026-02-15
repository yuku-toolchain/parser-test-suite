async function* gen() {
  for await (let {w: {x, y, z} = undefined} of [{}]) {
    return;
  }
}
gen().next().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);