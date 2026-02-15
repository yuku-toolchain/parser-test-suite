async function fn() {
  for await (const [x = (function () {})()] of [[undefined]]) {
    return;
  }
}
fn().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);