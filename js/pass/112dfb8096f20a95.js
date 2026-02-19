async function fn() {
  for await (var [x = (function () {})()] of [[undefined]]) {
    return;
  }
}
fn().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);