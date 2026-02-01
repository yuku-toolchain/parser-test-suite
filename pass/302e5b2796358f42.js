async function* gen() {
  for await (var {w: [x, y, z] = [4, 5, 6]} of [{
    w: null
  }]) {
    return;
  }
}
gen().next().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);