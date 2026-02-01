let nonCallable = {};
function* gen() {
  yield 1;
}
gen().reduce(() => {});