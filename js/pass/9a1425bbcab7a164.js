async function* gen() {
  for await (var [x = (function () {})()] of [[undefined]]) {
    return;
  }
}
gen().next().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);