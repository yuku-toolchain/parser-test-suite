async function fn() {
  for await (let [x = (function () {})()] of [[undefined]]) {
    return;
  }
}
fn().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);